
// окно - телефон

const mobile = document.querySelector('.nav-telephone__img');
const dropdownMobile = document.querySelector('.dropdown__telephone-block')

mobile.addEventListener('click', function () {
    dropdownMobile.classList.toggle('active')
})

// opening hamburger menu after click on span

hamburgerButton = document.querySelector('.hamburger');
hamburgerMenu = document.querySelector('.hamburger__menu');
body = document.querySelector('body');

hamburgerButton.addEventListener('click', function () {
    hamburgerButton.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    body.classList.toggle('ns');
    // no scroll for body in order to add scroll to menu
})