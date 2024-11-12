// Toggle class active hamburger menu

const navbarNav =document.querySelector('.navbar-nav');
// ketika Hamburger Di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-botton').onclick = (e)=>{
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-botton').onclick = (e)=>{
  shoppingCart.classList.toggle('active'); 
  e.preventDefault(); 
}
// Klik diluar Sidebar

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-botton');
const sc = document.querySelector('#shopping-cart-botton');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
      searchForm.classList.remove('active');
  }
}
});