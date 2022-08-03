// Toggle Menus Desktop & Mobile

let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu')

let menuBurguer = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')

//  Shopping Cart

let menuCart = document.querySelector('.navbar-shopping-cart')
let aside = document.querySelector('.product-detail')

// Cards Container
let cardsContainer = document.querySelector('.cards-container')
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


let productList = [];
productList.push({
    name : 'Trippy Gm',
    price : '0.1',
    image : './trippyGm.gif'
})
productList.push({
    name : 'Trippy Gn',
    price : '0.1',
    image : './trippyGn.gif'
})
productList.push({
    name : 'Trippy Gm',
    price : '0.1',
    image : './trippyGm.gif'
})
productList.push({
    name : 'Trippy Gn',
    price : '0.1',
    image : './trippyGn.gif'
})
productList.push({
    name : 'Trippy Gm',
    price : '0.1',
    image : './trippyGm.gif'
})
productList.push({
    name : 'Trippy Gn',
    price : '0.1',
    image : './trippyGn.gif'
})
productList.push({
    name : 'Trippy Gm',
    price : '0.1',
    image : './trippyGm.gif'
})
productList.push({
    name : 'Trippy Gn',
    price : '0.1',
    image : './trippyGn.gif'
})

function renderProducts(arr) {
    for (product of productList) {
      let productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      let productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
    
      let productInfo= document.createElement('div');
      productInfo.classList.add('product-info');
    
      let productInfoDiv = document.createElement('div');
    
      let productPrice = document.createElement('div');
      productPrice.innerText = 'ETH ' + product.price;
    
      let productName = document.createElement('div');
      productName.innerText = product.name;
    
      productInfoDiv.append(productPrice, productName);
    
      let productInfoFigure= document.createElement('figure');
      let productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.append(productInfoDiv, productInfoFigure);
    
      productCard.append(productImg, productInfo);
    
      cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
