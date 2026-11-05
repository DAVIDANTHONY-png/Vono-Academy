# Vono Programming Academy Website

A responsive, static website for Vono Programming Academy.

## Included
- Dark technology-inspired design, responsive for phones and desktops
- Course overview: Python, Java and C
- Six-week roadmap overview
- Weekly timetable and hybrid-learning information
- Package pricing
- OPay transfer details and receipt-verification explanation
- FAQ and contact email
- Google Form registration link placeholder

## Update before publishing
1. Open `index.html` and replace `[Account Name]` with the exact OPay account name.
2. Open `script.js` and set `GOOGLE_FORM_URL` to the published Google Form URL.
3. In `index.html`, replace the contact placeholder only if/when a phone number is provided. The current page intentionally does not invent one.
4. Confirm that the OPay account number and bank details are correct before publishing.
5. Review programme dates, class arrangements, venue and any certificate claims before adding them. The current page does not promise a certificate.

## Run locally
Open `index.html` in a browser. For best results, serve the folder with a local static server.

## Deploy
Upload the folder contents to any static hosting service such as Netlify, GitHub Pages or Cloudflare Pages. No backend is required for this first public-facing version.

## Registration workflow
The website currently keeps the registration destination disabled until a Google Form URL is configured. Build the Google Form with the candidate fields, course selection, payment reference and receipt upload. Link its response destination to a Google Sheet. Google Forms file uploads generally require respondents to sign in to a Google account.

## Important
This is the public-facing academy website, not the private management portal. Payment is not automatically verified by the website; the receipt is submitted through the form and must be checked manually by the academy administrator.
