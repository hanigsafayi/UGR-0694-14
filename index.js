const burgerIcon = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector('#nav-link');

menuIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});