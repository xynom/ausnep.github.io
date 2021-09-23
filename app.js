
const hamburger = document.getElementsByClassName('toggle-btn')[0];
const mainNav = document.getElementsByClassName('main-nav')[0];
hamburger.addEventListener('click', function() {
  mainNav.classList.toggle('show');
  hamburger.classList.toggle('show');
});
