// AI Assistant Logic
const aiBubble = document.getElementById('ai-assistant');

aiBubble.addEventListener('click', () => {
    alert("Hello! I'm the Default Graphix AI. I'm currently being calibrated, but soon I'll be able to help you with design quotes!");
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '0.8rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.padding = '1.5rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Simple Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! Default Graphix will get back to you soon.');
});
