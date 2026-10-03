# MLOVA Vercel deployment

1. Import this folder into Vercel.
2. Add `GOOGLE_CLIENT_ID` for Google Sign-In (optional).
3. Add these variables for real password-reset emails:
   - `RESEND_API_KEY` — API key from Resend.
   - `MAIL_FROM` — a verified sender, for example `MLOVA <no-reply@yourdomain.com>`.
   - `PUBLIC_APP_URL` — the production URL, for example `https://mlova.example.com`.
4. Add the Vercel production origin to Google OAuth Authorized JavaScript origins.
5. Reset links expire after 30 minutes and are single-use. The app now shows a real reset form at `/#/reset?token=...`.
6. For permanent cross-device data and UTR uniqueness, replace `mlova-data.json` file storage with a persistent database because Vercel function filesystems are ephemeral.
7. The current UPI destination is `montusoni@fam`, payee `Montu Soni`, amount ₹4.
