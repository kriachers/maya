const ul = document.querySelector('.accordion__list');
console.log('ul', ul);
const items = ul.getElementsByTagName('li');

for (let i = 0; i < items.length; ++i) {
    const singleLi = items[i];

    singleLi.addEventListener('click', (e) => {
        console.log('i', i);

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