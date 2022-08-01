
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