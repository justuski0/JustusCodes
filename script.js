// Initialize Typed.js for dynamic text animation
const options = {
    strings: ["Frontend Developer", "Web Enthusiast", "Tech Explorer"], // Array of strings to display in the text animation
    typeSpeed: 50,  // Speed of typing each character (in milliseconds)
    backSpeed: 30,  // Speed of deleting the text (in milliseconds)
    backDelay: 1000, // Time delay before starting to backspace (in milliseconds)
    loop: true,  // Loop the animation endlessly
    cursorChar: '|',  // Custom character used for the typing cursor
};

// Create a new Typed instance
const typed = new Typed('.text', options); // Applies the Typed.js animation to the element with the class 'text'

// Toggle navbar for mobile view
const menuIcon = document.getElementById('menu-icon'); // Grabs the element with the ID 'menu-icon' (the mobile menu icon)
const navbar = document.querySelector('.navbar'); // Selects the 'navbar' class element (the mobile navigation menu)

// Add event listener to the menu icon for the 'click' event
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Toggles the 'active' class on the navbar, opening or closing it
});

// Close navbar when clicking outside of it
window.addEventListener('click', (event) => {
    // Checks if the clicked element is not the menu icon or within the navbar
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active');  // Removes the 'active' class to close the navbar
    }
});

$(document).ready(function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
        mouseX = e.pageX - 30; // Offset to center the circle
        mouseY = e.pageY - 30; // Offset to center the circle
    });
    
    setInterval(function(){
        xp += ((mouseX - xp) / 6); // Smooth movement
        yp += ((mouseY - yp) / 6); // Smooth movement
        $("#circle").css({left: xp + 'px', top: yp + 'px'}); // Update position
    }, 20);
});