# Quick Setup Guide

## 1. Set Up Google Sheets (5 minutes)

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: "Tal Arditi Concert Signups"
3. Add headers in Row 1:
   ```
   Name | Email | Timestamp | Paid
   ```
4. **Extensions > Apps Script**
5. Delete existing code
6. Copy entire `google-script.js` file and paste
7. Save (Ctrl/Cmd + S)
8. **Deploy > New deployment**
   - Type: Web app
   - Execute as: Me
   - Access: Anyone
   - Deploy
9. **Copy the Web App URL**

## 2. Update Website Config (1 minute)

Open `script.js` and update:

```javascript
const CONFIG = {
    GOOGLE_SCRIPT_URL: 'PASTE_YOUR_URL_HERE',
    PAYPAL_URL: 'PASTE_PAYPAL_LINK_HERE',
    MAX_CAPACITY: 25
};
```

## 3. Deploy Website (2 minutes)

### Option A: GitHub Pages
1. Push to GitHub
2. Settings > Pages
3. Source: main branch
4. Save
5. Site live at: `https://yourusername.github.io/repo-name`

### Option B: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag `repo` folder onto site
3. Done! Instant live site

## 4. Get PayPal Link

Create a PayPal.me link:
- Go to paypal.me/yourname
- Or use PayPal Business checkout button

**Advanced:** Set return URL to `thank-you.html` after payment

## 5. Test It

1. Open your live site
2. Submit a test signup
3. Check Google Sheet - should see your entry
4. Verify PayPal redirect works

## You're Done!

Share the link and watch signups roll in.

## Tracking Payments

When someone pays:
1. Check PayPal for payment
2. Open Google Sheet
3. Find their row (Name + Email)
4. Change "Paid" from "No" to "Yes"

## Troubleshooting

**Form not submitting?**
- Check Google Script URL is correct in `script.js`
- Make sure Google Script is deployed as "Anyone" can access

**PayPal redirect not working?**
- Check PayPal URL in `script.js`
- Test the link directly

**Spots not updating?**
- Refresh the page
- Check Google Script permissions

Need help? Email: hello@talarditi.com
