document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
