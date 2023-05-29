const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const mobileMenuWrapper = document.getElementsByClassName('mobile-menu-wrapper')[0];

hamburgerMenu.addEventListener('click', () => {
    mobileMenuWrapper.classList.toggle('open');
    hamburgerMenu.classList.toggle('fa-times');
    hamburgerMenu.classList.toggle('fa-bars');

})