class Products {

    constructor() {
        this.classNameActive = 'product-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';

    }

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                    <button class='product-element__btn'>Подробнее</button>
                </li>
            `;
        });

        let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

    renderFilter() {
        let htmlCatalog = '';

        newCatalog.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                    <button class='product-element__btn'>Подробнее</button>
                </li>
            `;
        });

        let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

}

const productsPage = new Products();
productsPage.render();


var isPants = CATALOG.filter(function (hero) {
    return hero.category == 'трусы';
});

const pants = document.getElementById('filter-pants');

pants.addEventListener('click', function () {

    let htmlCatalog = '';

    isPants.forEach(({ id, name, price, img }) => {

        htmlCatalog += `
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                    <button class='product-element__btn'>Подробнее</button>
                </li>
            `;
    });
    let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
})


let isBandages = CATALOG.filter(function (hero) {
    return hero.category == 'бандаж';
});


const bandages = document.getElementById('filter-bandages');


bandages.addEventListener('click', function () {

    let htmlCatalog = '';

    isBandages.forEach(({ id, name, price, img }) => {

        htmlCatalog += `
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                    <button class='product-element__btn'>Подробнее</button>
                </li>
            `;
    });
    let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
})


// bra


var isBra = CATALOG.filter(function (hero) {
    return hero.category == 'бюсгальтер';
});


const bra = document.getElementById('filter-busgalters');

bra.addEventListener('click', function () {

    let htmlCatalog = '';

    isBra.forEach(({ id, name, price, img }) => {

        htmlCatalog += `
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                   <button class='product-element__btn'>Подробнее</button>
                </li>
            `;
    });
    let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
})


var isLeggins = CATALOG.filter(function (hero) {
    return hero.category == 'лосины';
});




// const leggins = document.getElementById('filter-leggins');

// leggins.addEventListener('click', function () {

//     let htmlCatalog = '';

//     isLeggins.forEach(({ id, name, price, img }) => {

//         htmlCatalog += `
//                 <li class='products-item'>
//                     <img class='product-element__img' src='${img}' />
//                     <span class='product-element__name'>${name}</span>
//                     <span class='product-element__price'>${price} ₽</span>
//                     <button class='product-element__btn>'Подробнее'</button>
//                 </li>
//             `;
//     });
//     let html = `
//         <ul class='products-container'>
//             ${htmlCatalog}
//         </ul>
//         `;

//     ROOT_PRODUCTS.innerHTML = html;
// })


// фильтр "леггинсы"

let newCatalog =
    CATALOG.filter(function (hero) {
        return hero.category == 'лосины';
    });

const legginsPage = new Products();

const leggins = document.getElementById('filter-leggins');

leggins.addEventListener('click', () => {
    legginsPage.renderFilter();
})


// фильтр "все товары" - методы класса render()

const allItems = document.getElementById('filter-all');

allItems.addEventListener('click', () => {

    productsPage.render()

})