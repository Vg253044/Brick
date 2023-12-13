// Assuming you have a button with id "toggleButton" to trigger the display change
const toggleButton = document.getElementById('toggleButton');
const mobileMenu = document.getElementById('mobileMenu');

// Event listener for the button click
toggleButton.addEventListener('click', () => {
  // Toggle the display property of the mobileMenu between 'none' and 'flex'
  mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
});
