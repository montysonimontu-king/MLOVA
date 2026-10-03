const http = require('http');
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const STORE = path.join(ROOT, 'mlova-data.json');
const SHARED_KEYS = new Set(['users','products','payments','reports','blocked','favs','seeded']);
const DEFAULTS = { users: [], products: [], payments: [], reports: [], blocked: {}, favs: {}, seeded: 0 };
function load() { try { return { ...DEFAULTS, ...JSON.parse(fs.readFileSync(STORE, 'utf8')) }; } catch { return { ...DEFAULTS }; } }
function save(data) { const tmp = STORE + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(data, null, 2)); fs.renameSync(tmp, STORE); }
let data = load(); if (!fs.existsSync(STORE)) save(data);
function json(res, status, value) { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' }); res.end(JSON.stringify(value)); }
function body(req) { return new Promise((resolve, reject) => { let raw = ''; req.on('data', c => { raw += c; if (raw.length > 12 * 1024 * 1024) req.destroy(); }); req.on('end', () => { try { resolve(JSON.parse(raw || '{}')); } catch (e) { reject(e); } }); req.on('error', reject); }); }
function googleTokenInfo(token) { return new Promise((resolve, reject) => { const req = https.get('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(token), r => { let raw = ''; r.on('data', c => raw += c); r.on('end', () => { try { const value = JSON.parse(raw); r.statusCode === 200 ? resolve(value) : reject(new Error(value.error_description || 'Google token rejected')); } catch (e) { reject(e); } }); }); req.setTimeout(8000, () => { req.destroy(); reject(new Error('Google verification timed out')); }); req.on('error', reject); }); }
function postJSON(hostname, pathName, payload, headers={}) { return new Promise((resolve, reject) => { const raw = JSON.stringify(payload); const req = https.request({ hostname, path: pathName, method:'POST', headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(raw),...headers} }, res => { let out=''; res.on('data',c=>out+=c); res.on('end',()=>{let v={};try{v=JSON.parse(out)}catch{};res.statusCode>=200&&res.statusCode<300?resolve(v):reject(new Error(v.message||v.error||'Email provider rejected the request'))}) }); req.on('error',reject); req.setTimeout(10000,()=>{req.destroy(new Error('Email provider timed out'))}); req.write(raw); req.end(); }); }
function hashToken(token) { return crypto.createHash('sha256').update(token).digest('hex'); }
async function sendResetEmail(email, token) { const base = (process.env.PUBLIC_APP_URL || '').replace(/\/$/,''); const link = base + '/#/reset?token=' + encodeURIComponent(token); return postJSON('api.resend.com','/emails',{from:process.env.MAIL_FROM,to:[email],subject:'Reset your MLOVA password',html:`<div style="font-family:Arial,sans-serif;line-height:1.6"><h2>Reset your MLOVA password</h2><p>Use the button below to choose a new password. This link expires in 30 minutes.</p><p><a href="${link}" style="background:#4287f5;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none">Reset password</a></p><p>If you did not request this, you can ignore this email.</p></div>`},{Authorization:'Bearer '+process.env.RESEND_API_KEY}); }
function safePath(urlPath) { const decoded = decodeURIComponent(urlPath.split('?')[0]); const file = decoded === '/' ? 'index.html' : decoded.replace(/^\//, ''); const full = path.resolve(ROOT, file); return full.startsWith(ROOT) ? full : null; }
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') { res.writeHead(204, { 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' }); return res.end(); }
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/health') return json(res, 200, { ok: true, service: 'mlova', shared: true, emailConfigured: Boolean(process.env.RESEND_API_KEY && process.env.MAIL_FROM && process.env.PUBLIC_APP_URL) });
  if (url.pathname === '/api/auth/config' && req.method === 'GET') return json(res, 200, { googleClientId: process.env.GOOGLE_CLIENT_ID || '' });
  if (url.pathname === '/api/auth/google' && req.method === 'POST') { try { const input = await body(req); if (!process.env.GOOGLE_CLIENT_ID) return json(res,503,{error:'Google Sign-In is not configured yet. Add GOOGLE_CLIENT_ID on the server.'}); if (!input.credential) return json(res,400,{error:'Google credential is missing'}); const g=await googleTokenInfo(input.credential); if(g.aud!==process.env.GOOGLE_CLIENT_ID||(g.iss!=='accounts.google.com'&&g.iss!=='https://accounts.google.com')||g.email_verified!=='true')return json(res,401,{error:'Google account could not be verified'}); const email=String(g.email||'').toLowerCase(); let user=data.users.find(u=>u.googleSub===g.sub||u.email===email); if(user){user={...user,googleSub:g.sub,authProvider:'google',profilePhoto:g.picture||user.profilePhoto||'',name:g.name||user.name};data.users=data.users.map(u=>u.uid===user.uid?user:u)}else{user={uid:'g'+g.sub,googleSub:g.sub,authProvider:'google',name:g.name||email.split('@')[0],email,pass:'',phone:'',profilePhoto:g.picture||'',city:'Jaipur',locality:'',role:'user',createdAt:Date.now()};data.users.push(user)} save(data); return json(res,200,{ok:true,user:{...user,pass:undefined}})}catch(e){return json(res,401,{error:e.message||'Google Sign-In failed'})} }
  if (url.pathname === '/api/auth/forgot' && req.method === 'POST') { try { const input=await body(req), email=String(input.email||'').trim().toLowerCase(); if(!/^\S+@\S+\.\S+$/.test(email)) return json(res,400,{error:'Enter a valid email'}); if(!process.env.RESEND_API_KEY||!process.env.MAIL_FROM||!process.env.PUBLIC_APP_URL) return json(res,503,{error:'Email service is not configured. Add RESEND_API_KEY, MAIL_FROM and PUBLIC_APP_URL.'}); const user=data.users.find(u=>u.email===email); if(user){const token=crypto.randomBytes(32).toString('hex'); data.resetTokens=data.resetTokens||{}; data.resetTokens[hashToken(token)]={uid:user.uid,expiresAt:Date.now()+30*60*1000}; save(data); await sendResetEmail(email,token)} return json(res,200,{ok:true,message:'If an account exists for that email, a reset link has been sent.'})}catch(e){return json(res,502,{error:'Could not send the reset email. Please try again.'})} }
  if (url.pathname === '/api/auth/reset' && req.method === 'POST') { try { const input=await body(req), token=String(input.token||''), password=String(input.password||''); if(token.length<20||password.length<6)return json(res,400,{error:'Invalid reset request'}); const key=hashToken(token), entry=(data.resetTokens||{})[key]; if(!entry||entry.expiresAt<Date.now())return json(res,400,{error:'This reset link is invalid or expired'}); data.users=data.users.map(u=>u.uid===entry.uid?{...u,pass:password}:u); delete data.resetTokens[key]; save(data); return json(res,200,{ok:true})}catch(e){return json(res,400,{error:'Could not reset password'})} }
  if (url.pathname === '/api/payments/claim' && req.method === 'POST') {
  try {
    const input = await body(req);

    const utr = String(input.utr || '').trim();
    const productId = String(input.productId || '').trim();

    // 12-digit UTR required
    if (!/^\d{12}$/.test(utr)) {
      return json(res, 400, {
        error: 'UTR must be exactly 12 digits'
      });
    }

    // Prevent reuse of the same UTR
    if (data.payments.some(p => String(p.utr) === utr)) {
      return json(res, 409, {
        error: 'This UTR has already been used and cannot be reused.'
      });
    }

    // Find listing
    const product = data.products.find(
      p => String(p.productId) === productId
    );

    if (!product) {
      return json(res, 404, {
        error: 'Listing not found.'
      });
    }

    const paymentId = 'PAY_' + Date.now();

    // Save UTR submission
    data.payments.push({
      paymentId,
      sellerId: product.sellerId,
      productId,
      utr,
      amount: 4,
      currency: 'INR',
      status: 'demo-confirmed',
      verification: 'demo-utr-only',
      createdAt: Date.now()
    });

    // Publish listing
    data.products = data.products.map(p =>
      String(p.productId) === productId
        ? {
            ...p,
            status: 'published',
            paymentStatus: 'success',
            paymentId,
            utr,
            updatedAt: Date.now()
          }
        : p
    );

    save(data);

    return json(res, 200, {
      ok: true,
      paymentId,
      productId,
      message: 'Listing confirmed in demo mode.'
    });

  } catch (e) {
    console.error(e);

    return json(res, 400, {
      error: 'Could not confirm listing'
    });
  }
}
  if (url.pathname === '/api/state' && req.method === 'GET') { const key=url.searchParams.get('key');if(!SHARED_KEYS.has(key))return json(res,400,{error:'Invalid key'});return json(res,200,{value:data[key]??DEFAULTS[key]}); }
  if (url.pathname === '/api/state' && req.method === 'POST') { try { const input=await body(req),key=input.key;if(!SHARED_KEYS.has(key))return json(res,400,{error:'Invalid key'});data[key]=input.value;save(data);return json(res,200,{ok:true,value:data[key]})}catch{return json(res,400,{error:'Invalid JSON'})} }
  if (url.pathname === '/manus-routes.json') return json(res,200,{routes:[{path:'/',title:'Home'},{path:'/browse',title:'Browse Products'},{path:'/categories',title:'Categories'},{path:'/sell',title:'Sell Product'},{path:'/login',title:'Login'},{path:'/signup',title:'Sign Up'},{path:'/forgot',title:'Forgot Password'},{path:'/reset',title:'Reset Password'},{path:'/dashboard',title:'Seller Dashboard'},{path:'/profile',title:'Profile'}]});
  const file=safePath(url.pathname);if(!file)return res.writeHead(403).end('Forbidden');fs.stat(file,(err,stat)=>{if(err||!stat.isFile())return res.writeHead(404).end('Not found');res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res)});
});
if(process.env.VERCEL)module.exports=server;else server.listen(PORT,'0.0.0.0',()=>console.log(`MLOVA shared server listening on 0.0.0.0:${PORT}`));
