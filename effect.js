// script.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the href is 'gallery.html'
        if (this.getAttribute('href') === 'gallery.html' || this.getAttribute('href') === 'team.html') {
            // Allow the default behavior for the Gallery link
            return; // Exit the function, allowing normal link behavior
        }
        
        // Prevent default behavior for smooth scrolling
        e.preventDefault(); 
        
        // Get the target element to scroll to
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

 window.addEventListener('load', function() {
    const brainImage = document.getElementById('brain-img');
    brainImage.classList.add('loaded');
});
