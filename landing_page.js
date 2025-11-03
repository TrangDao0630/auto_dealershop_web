// --- Mobile Menu Toggle ---

// Get the button and the menu
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add a click event listener to the button
menuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the menu
    mobileMenu.classList.toggle('hidden');
});

// You can add more JavaScript functionality here.
console.log("AutoHub Motors script loaded!");
