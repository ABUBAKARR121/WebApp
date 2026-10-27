// Initialize the counter
let count = 0;

// Get elements from the HTML document
const counterDisplay = document.getElementById('counter-display');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnTheme = document.getElementById('btn-theme');

// Function to update the display and change color based on the number
function updateDisplay() {
    counterDisplay.textContent = count;
    
    if (count > 0) {
        counterDisplay.style.color = '#28a745'; // Green
    } else if (count < 0) {
        counterDisplay.style.color = '#dc3545'; // Red
    } else {
        counterDisplay.style.color = 'var(--text-color)'; // Default text color
    }
}

// Event Listeners for the buttons
btnIncrease.addEventListener('click', () => {
    count++;
    updateDisplay();
});

btnDecrease.addEventListener('click', () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Event Listener for Dark Mode Toggle
btnTheme.addEventListener('click', () => {
    // Toggles the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});
