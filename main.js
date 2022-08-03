// Toggle Menus Desktop & Mobile

let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu')

let menuBurguer = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')

//  Shopping Cart

let menuCart = document.querySelector('.navbar-shopping-cart')
let aside = document.querySelector('.product-detail')

// Listeners 
menuEmail.addEventListener('click', toggleMenus);
menuBurguer.addEventListener('click', toggleMenus);
menuCart.addEventListener('click', toggleCartMenu)

//Functions 

function toggleMenus() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');

}

function toggleCartMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
