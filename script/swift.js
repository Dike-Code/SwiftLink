const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-sections')

menu.addEventListener('click', showMenu);

function showMenu() {
  nav.classList.toggle('show')
}