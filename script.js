// Simple fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });
});
// In the observer callback
if (entry.isIntersecting) {
    entry.target.classList.add('visible'); // Add this line
}
// Typewriter effect
const typewriterText = "Unlock your potential with our creative services!"; // Customize your text here
let i = 0;
const speed = 100; // Typing speed in ms

function typeWriter() {
    if (i < typewriterText.length) {
        document.getElementById("typewriter-text").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start animation on page load
window.onload = function() {
    typeWriter();
};
