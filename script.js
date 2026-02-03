// Configuration
const CONFIG = {
    // Google Apps Script Web App URL (replace with your deployed script URL)
    GOOGLE_SCRIPT_URL: 'YOUR_GOOGLE_SCRIPT_URL_HERE',

    // PayPal payment URL (replace with actual PayPal link)
    PAYPAL_URL: 'YOUR_PAYPAL_URL_HERE',

    // Maximum capacity
    MAX_CAPACITY: 25
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSpotsRemaining();
    setupForm();
});

// Load spots remaining from Google Sheets
async function loadSpotsRemaining() {
    try {
        const response = await fetch(`${CONFIG.GOOGLE_SCRIPT_URL}?action=getCount`);
        const data = await response.json();
        const spotsLeft = CONFIG.MAX_CAPACITY - (data.count || 0);

        document.getElementById('spots-left').textContent = Math.max(0, spotsLeft);

        // Disable form if full
        if (spotsLeft <= 0) {
            disableForm('Concert is full!');
        }
    } catch (error) {
        console.error('Error loading spots:', error);
        // Continue anyway - don't block signup
    }
}

// Setup form submission
function setupForm() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            alert('Please fill in all fields');
            return;
        }

        // Show loading
        showLoading();

        try {
            // Submit to Google Sheets
            const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    timestamp: new Date().toISOString(),
                    paid: 'No'
                })
            });

            // Redirect to PayPal
            // Note: In production, you might want to add name/email as reference in PayPal URL
            setTimeout(() => {
                window.location.href = CONFIG.PAYPAL_URL;
            }, 1000);

        } catch (error) {
            console.error('Error submitting form:', error);
            hideLoading();
            alert('Something went wrong. Please try again or contact us directly.');
        }
    });
}

// Show loading overlay
function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

// Hide loading overlay
function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

// Disable form when full
function disableForm(message) {
    const form = document.getElementById('signup-form');
    const button = form.querySelector('.btn-primary');

    button.disabled = true;
    button.textContent = message;
    button.style.background = '#ccc';
    button.style.cursor = 'not-allowed';

    form.querySelectorAll('input').forEach(input => {
        input.disabled = true;
    });
}
