/** @format */

const logo = document.querySelector('#brand-logo');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
const navItems = document.querySelector('.nav-sections');

// Event-trigger
// Applied Hoisting
eventTrigger();

function eventTrigger() {
   menu.addEventListener('click', showMenu);
   window.addEventListener('scroll', stick);
}

// Stick Navbar
function stick() {
   if (window.scrollY > 600) {
      nav.style = `background:#4d5060;`;
      logo.style = `color:#efefef;`;
   } else if (window.scrollY < 500) {
      nav.style.backgroundColor = 'transparent';
      logo.style = `color:#282d42`;
   }
}

// Hamburger Handler
function showMenu() {
   navItems.classList.toggle('show');
}
