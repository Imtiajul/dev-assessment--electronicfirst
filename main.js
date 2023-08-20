import './style.scss'

const searchNavbar = document.querySelector('.search-navbar');
const searchToggle = document.getElementById('search-toggle');

let toggleImg = true;

searchToggle.addEventListener('click', () => {
  searchNavbar.classList.toggle('show');
  searchToggle.firstElementChild.src = !toggleImg ? "close-50.png" : "search-32.png";
  toggleImg = !toggleImg;
})
