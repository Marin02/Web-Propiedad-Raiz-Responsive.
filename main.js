// Event Hamburger Menu Script

document.querySelector('.bars__menu').addEventListener('click', animateBars);

var menu__mobile = document.querySelector('.mobile-links');

var line1__bars = document.querySelector('.line1__bars-menu');

var line2__bars = document.querySelector('.line2__bars-menu');

var line3__bars = document.querySelector('.line3__bars-menu');

function animateBars() {
    line1__bars.classList.toggle('activeline1__bars-menu');
    line2__bars.classList.toggle('activeline2__bars-menu');
    line3__bars.classList.toggle('activeline3__bars-menu');
    menu__mobile.classList.toggle('activemobile-links')
}

// Event Submenu Services

const services = document.querySelector('.mobile__item--services');
const services__submenu = document.querySelector('.mobile__services--submenu')

services.addEventListener('click', () => {
    services__submenu.classList.toggle('mobile__services--submenu');
})

// Event Submenu Us

const us = document.querySelector('.mobile__item--us');
const us__submenu = document.querySelector('.mobile__us--submenu');

us.addEventListener('click', () => {
    us__submenu.classList.toggle('mobile__us--submenu');
})
