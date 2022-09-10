const couponButton = document.querySelector('.coupon__button');
let couponModal = document.querySelector('.coupon__modal');
let couponCross = document.querySelector('.coupon-modal__cross');
let modalOverlay = document.querySelector('.modal__overlay');

let copyButton = document.querySelector('.coupon-modal__copy');
let textToCopy = document.querySelector('.coupon-modal__promocode');
let couponNotification = document.querySelector('.coupon-modal__notification')

couponButton.addEventListener('click', function () {
    couponModal.classList.add('active');
    modalOverlay.classList.add('active');
})

couponCross.addEventListener('click', function () {
    couponModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    couponNotification.classList.remove('active')
})

console.log(copyButton);

copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(textToCopy.innerHTML).then(() => {
        couponNotification.classList.add('active')
    })
        .catch(err => {
            console.log('copy error')
        });
})



// FOOTER E-MAIL

const FooterForm = document.querySelector('.footer__form')
const MessageSended = document.querySelector('.footer-form__sended')
const FooterFormTitle = document.querySelector('.footer-form__title')

FooterForm.addEventListener('submit', function () {
    event.preventDefault();
    MessageSended.classList.add('active');
    FooterForm.classList.add('hidden');
    FooterFormTitle.textContent('Письмо успешно отправлено!');
})