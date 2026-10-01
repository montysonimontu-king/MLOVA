# MLOVA — Buy. Sell. Connect.

Local person-to-person marketplace. Sellers pay **₹4 per listing** (UPI), buyers browse free.

## Run it (demo — no build needed)
Open `index.html` in any browser. The demo uses localStorage as a mock database
with 12 sample products, 4 sellers and a full ₹4 UPI payment flow.

**Demo accounts**
| Role | Email | Password |
|---|---|---|
| Seller/Buyer | rahul@demo.in | demo123 |
| Seller | priya@demo.in | demo123 |
| **Admin** | admin@mlova.in | admin123 |

**Payment (demo)** — checkout shows a UPI QR + deep link to `montusoni@fam` (₹4.00).
Demo mode auto-approves. In production verify via Razorpay webhook on the server —
NEVER trust payment status from the browser.

## Production setup (Firebase)
1. **Firebase project** — console.firebase.google.com → create project → add Web app.
2. **Authentication** — enable Email/Password and Google providers.
3. **Firestore** — create database (production mode). Collections: `users`, `products`,
   `categories`, `payments`, `reports`, `favorites`.
4. **Storage** — enable; folder structure: `products/{uid}/`, `avatars/{uid}/`.
5. **Security rules** — users read/write only their own docs; `products` readable when
   `status == "published"`, writable only by owner; `payments` server-write only;
   client can NEVER set `paymentStatus: "success"` or change `sellerId`.
6. **Env variables** — put Firebase config + gateway keys in env vars / Cloud Functions
   secrets. Never in front-end code.
7. **Payment gateway** — Cloud Functions: `createOrder` (Razorpay order for ₹4) and
   `verifyPayment` (signature check) → only then set `product.status = "published"`.
8. **Admin** — custom claim `role: "admin"` on a Firebase user; admin routes check the claim.

## Structure (single-file SPA demo)
`index.html` — all 23 pages as hash routes (`#/`, `#/browse`, `#/p/:id`, `#/sell`,
`#/checkout/:id`, `#/admin`, …). Swap the `DB` helper functions with Firestore calls
and the `login/signup` functions with Firebase Auth when going live.

## Included features
- Distance filter (2/5/10/25 km) with browser geolocation + haversine calc
- Pagination (Load more, 8 per page) on browse/search
- Block user (hides their listings) & Report user (goes to admin reports)
- Profile photo upload (validated type + 2MB size)
- JSON-LD structured product data for SEO
- Firebase config block (`FIREBASE_CONFIG`) — paste real keys to go live
- `robots.txt` + `sitemap.xml`
