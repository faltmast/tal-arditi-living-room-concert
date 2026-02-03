# Tal Arditi Living Room Concert - Signup Page

Beautiful, minimal signup page for a private living room concert.

## Features

- Clean, responsive design
- Name + Email signup form
- Tracks signups in Google Sheets
- Redirects to PayPal for payment
- Shows remaining spots in real-time
- Auto-disables when capacity is reached

## Setup Instructions

### 1. Google Sheets Backend

1. Create a new Google Sheet
2. Name it "Tal Arditi Concert Signups"
3. Add headers in first row: `Name | Email | Timestamp | Paid`
4. Go to **Extensions > Apps Script**
5. Delete existing code and paste contents from `google-script.js`
6. Save the script (name it "Concert Signup Handler")
7. Click **Deploy > New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** and copy the Web App URL

### 2. Configure the Website

1. Open `script.js`
2. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your Google Script URL
3. Replace `YOUR_PAYPAL_URL_HERE` with your PayPal payment link

### 3. Add PayPal Link

Get your PayPal.me link or create a PayPal payment button:
- **PayPal.me**: https://www.paypal.me/yourname
- Or use PayPal's checkout button generator

### 4. Deploy

**Option A: GitHub Pages** (Easiest)
```bash
# Already set up in this repo
# Go to: Settings > Pages > Deploy from main branch
```

**Option B: Netlify/Vercel**
- Drag and drop the `repo` folder
- Site will be live instantly

**Option C: Any web host**
- Upload `index.html`, `style.css`, and `script.js`

## Tracking Payments

After someone pays via PayPal:
1. Open your Google Sheet
2. Find their row (Name + Email)
3. Change "Paid" column from "No" to "Yes"

Or set up PayPal IPN to auto-update (advanced).

## Concert Details

- **Date:** February 20, 2026
- **Location:** Neukölln @ Alexis Appartment
- **Price:** 10-20 EUR (sliding scale)
- **Capacity:** 25 people

## Customization

### Change Colors
Edit `style.css` CSS variables:
```css
:root {
    --primary: #2C3E50;      /* Dark blue-gray */
    --accent: #E8B4B8;       /* Soft pink */
    --background: #FDFBF7;   /* Warm white */
}
```

### Change Capacity
Edit `script.js`:
```javascript
MAX_CAPACITY: 25
```

### Update Concert Info
Edit `index.html` in the details section.

## Support

Questions? Contact: hello@talarditi.com

## License

Private project for Tal Arditi concert.
