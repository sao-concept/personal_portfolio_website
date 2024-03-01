// script.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
