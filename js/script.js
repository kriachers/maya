
const ul = document.querySelector('.accordion__list');
console.log('ul', ul);
const items = ul.getElementsByTagName('li');

for(let i = 0; i < items.length; ++i) {
    const singleLi = items[i];

    singleLi.addEventListener('click', (e) => {
        console.log('i',i);

        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
        }
    })


}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

 pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Autoplay

    autoplay: {
        delay: 5000,
    },

});


// окно - телефон

const mobile = document.querySelector('.nav-telephone__img');
const dropdownMobile = document.querySelector('.dropdown__telephone-block')

mobile.addEventListener('click', function() {
dropdownMobile.classList.toggle('active')
})

// opening hamburger menu after click on span

hamburgerButton = document.querySelector('.hamburger');
hamburgerMenu = document.querySelector('.hamburger__menu');
body = document.querySelector('body');

hamburgerButton.addEventListener('click', function() {
    hamburgerButton.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    body.classList.toggle('ns');
// no scroll for body in order to add scroll to menu
})