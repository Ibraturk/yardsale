// Toggle Menus Desktop & Mobile

let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu')

let menuBurguer = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleMenus);
menuBurguer.addEventListener('click', toggleMenus);

function toggleMenus() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');

}

