/**
 * Google Apps Script for Tal Arditi Concert Signup Tracking
 *
 * Setup Instructions:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name it "Tal Arditi Concert Signups"
 * 3. In first row, add headers: Name | Email | Timestamp | Paid
 * 4. Go to Extensions > Apps Script
 * 5. Delete any existing code and paste this entire file
 * 6. Save the script
 * 7. Click Deploy > New deployment
 * 8. Select type: Web app
 * 9. Execute as: Me
 * 10. Who has access: Anyone
 * 11. Click Deploy
 * 12. Copy the Web App URL
 * 13. Paste it in script.js where it says 'YOUR_GOOGLE_SCRIPT_URL_HERE'
 */

// Handle GET requests (for counting signups)
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const action = e.parameter.action;

  if (action === 'getCount') {
    const lastRow = sheet.getLastRow();
    const count = Math.max(0, lastRow - 1); // Subtract header row

    return ContentService
      .createTextOutput(JSON.stringify({ count: count }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ error: 'Unknown action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests (for adding signups)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add row: Name, Email, Timestamp, Paid
    sheet.appendRow([
      data.name,
      data.email,
      data.timestamp,
      data.paid || 'No'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
