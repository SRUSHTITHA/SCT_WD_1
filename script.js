
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
ScrollReveal().reveal('.hero h1', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.hero p', { delay: 400, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.hero .btn', { delay: 600, origin: 'bottom', distance: '30px' });

ScrollReveal().reveal('.about', { delay: 200, origin: 'left', distance: '60px' });
ScrollReveal().reveal('.services', { delay: 200, origin: 'right', distance: '60px' });
ScrollReveal().reveal('.contact', { delay: 200, origin: 'bottom', distance: '60px' });

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  formStatus.textContent = "Sending...";
  
  // Simulate sending
  setTimeout(() => {
    formStatus.textContent = "Message sent successfully!";
    contactForm.reset();
  }, 1500);
});