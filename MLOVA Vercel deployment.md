# MLOVA Vercel deployment

1. Import this folder into Vercel.
2. Add environment variable `GOOGLE_CLIENT_ID` with a Google OAuth **Web Client ID**.
3. Add the Vercel production origin to Google OAuth Authorized JavaScript origins.
4. For real cross-device data and permanent UTR uniqueness, replace `mlova-data.json` file storage with a persistent database (Vercel function filesystems are ephemeral).
5. The current UPI destination is `montusoni@fam`, payee `Montu Soni`, amount ₹4.
