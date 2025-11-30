// --- Mobile Menu Toggle ---

// Get the button and the menu
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Click event listener to the button
menuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the menu
    mobileMenu.classList.toggle('hidden');
});

console.log("AutoHub Motors script loaded!");
