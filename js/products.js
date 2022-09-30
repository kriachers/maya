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



    filterCategoryCATALOG = isPants;
    CategoryPicked = filterCategoryCATALOG;

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


// бандаж


let isBandages = CATALOG.filter(function (hero) {
    return hero.category == 'бандаж';
});


const bandages = document.getElementById('filter-bandages');

bandages.addEventListener('click', function () {

    filterCategoryCATALOG = isBandages;
    CategoryPicked = filterCategoryCATALOG;

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

    filterCategoryCATALOG = isBra;
    CategoryPicked = filterCategoryCATALOG;

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


// фильтр "леггинсы + renderFilter"

let newCatalog =
    CATALOG.filter(function (hero) {
        return hero.category == 'лосины';
    });

const legginsPage = new Products();

const leggins = document.getElementById('filter-leggins');

leggins.addEventListener('click', () => {
    legginsPage.renderFilter();

    filterCategoryCATALOG = newCatalog;
    CategoryPicked = filterCategoryCATALOG;
})


// фильтр "все товары" - методы класса render()

const allItems = document.getElementById('filter-all');

allItems.addEventListener('click', () => {

    productsPage.render()

})




// фильтры по цветам 

//один код для всех категорий цвета 
// связь с html через data-f="назавние-цвета"> и event.target.dataset['f']; 

// document.querySelector('.catalog-sidebar__color').addEventListener('click', (event) => {

//     if (event.target.tagName !== 'LI') return false;

//     let filterClass = event.target.dataset['f'];
//     console.log(filterClass)

//     let isColor = CATALOG.filter(function (element) {
//         let elementColor = element.color;
//         let elementFilteredClor = elementColor.find(item => {
//             if (item == filterClass) {
//                 return true;
//             }
//         });
//         return elementFilteredClor == filterClass;
//     })
//     console.log(isColor);

//     let htmlCatalog = '';
//     isColor.forEach(({ id, name, price, img }) => {

//         htmlCatalog += `
//                 <li class='products-item'>
//                     <img class='product-element__img' src='${img}' />
//                     <span class='product-element__name'>${name}</span>
//                     <span class='product-element__price'>${price} ₽</span>
//                    <button class='product-element__btn'>Подробнее</button>
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


// ФИЛЬТР ПО ЦВЕТАМ - SELECT!




let filterColor = document.querySelector('.catalog__filter')

let htmlCatalog = '';

filterColor.addEventListener('change', function () {

    // если клик добавляет к форме "галочку"
    if (event.target.checked) {

        let filterClass = event.target.dataset['f'];
        console.log(filterClass)

        let isColorOrCloth = filterCategoryCATALOG.filter(function (element) {

            let elementData;

            if (event.target.classList.contains('color')) {
                elementData = (element.color);

                let elementFilteredClor = elementData.find(item => {
                    if (item == filterClass) {
                        return true;
                    }
                });
                return elementFilteredClor == filterClass;
            }

            if (event.target.classList.contains('cloth')) {
                elementData = (element.cloth);

                let elementFilteredClor = elementData.find(item => {
                    if (item == filterClass) {
                        return true;
                    }
                });
                return elementFilteredClor == filterClass;
            }
        })


        isColorOrCloth.forEach(({ id, name, price, img }) => {

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
        console.log(html);
        ROOT_PRODUCTS.innerHTML = html;

        // если клик удаляет из формы "галочку"

    } else if (event.target.tagName == 'INPUT' || event.target.tagName == 'LABEL') {
        let filterClass = event.target.dataset['f'];

        isColor = filterCategoryCATALOG.filter(function (element) {
            let elementColor = element.color;
            let elementFilteredClor = elementColor.find(item => {
                if (item == filterClass) {
                    return true;
                }
            });
            return elementFilteredClor == filterClass;
        })

        isColor.forEach(({ id, name, price, img }) => {
            htmlCatalog = htmlCatalog.replace(`
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                   <button class='product-element__btn'>Подробнее</button>
                </li>
            `, '');
        });

        // если htmlCatalog не пустой - то удали из списка товары, с которых мы убрали галочку
        if (htmlCatalog.length != 0) {

            let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;
            ROOT_PRODUCTS.innerHTML = html;

            // если htmlCatalog пустой - то выводи ВСЕ ТОВАРЫ
        } else if (htmlCatalog.length == 0) {
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
    }


})


// ФИЛЬТР ПО ТКАНЯМ - SELECT!

let filterCloth = document.querySelector('.cloth__filter')

filterCloth.addEventListener('change', function () {

    // если клик добавляет к форме "галочку"
    if (event.target.checked) {

        let filterClass = event.target.dataset['f'];

        let isCloth = filterCategoryCATALOG.filter(function (element) {
            let elementCloth = element.cloth;
            console.log(elementCloth)
            let elementFilteredCloth = elementCloth.find(item => {
                if (item == filterClass) {
                    return true;
                }
            });
            return elementFilteredCloth == filterClass;
        })


        isCloth.forEach(({ id, name, price, img }) => {

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

        // если клик удаляет из формы "галочку"

    } else if (event.target.tagName == 'INPUT' || event.target.tagName == 'LABEL') {
        let filterClass = event.target.dataset['f'];

        isCloth = filterCategoryCATALOG.filter(function (element) {
            let elementCloth = element.cloth;
            let elementFilteredCloth = elementCloth.find(item => {
                if (item == filterClass) {
                    return true;
                }
            });
            return elementFilteredCloth == filterClass;
        })

        isCloth.forEach(({ id, name, price, img }) => {
            htmlCatalog = htmlCatalog.replace(`
                <li class='products-item'>
                    <img class='product-element__img' src='${img}' />
                    <span class='product-element__name'>${name}</span>
                    <span class='product-element__price'>${price} ₽</span>
                   <button class='product-element__btn'>Подробнее</button>
                </li>
            `, '');
        });

        // если htmlCatalog не пустой - то удали из списка товары, с которых мы убрали галочку
        if (htmlCatalog.length != 0) {

            let html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
        `;
            ROOT_PRODUCTS.innerHTML = html;

            // если htmlCatalog пустой - то выводи ВСЕ ТОВАРЫ
        } else if (htmlCatalog.length == 0) {
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
    }


})













// ВЫДЕЛИТЬ ЦВЕТОМ КАТЕГОРИЮ 

const categoryList = document.querySelector('.catalog-sidebar__nav');

// переменная для хранений id предыдущей выбранной категории 
var lastActiveTool = 0;

categoryList.addEventListener('click', function () {
    if (event.target.tagName != 'LI' && event.target.tagName != 'SPAN') {
        return
    }
    if (event.target.tagName == 'LI') {

        if (lastActiveTool != 0) {
            document.getElementById(lastActiveTool).classList.remove('active')
        }

        event.target.classList.add('active')
        lastActiveTool = event.target.id;
        console.log('hi[jwdb')

        // убираем цвет из предыдущей выбранной категории (если есть)
    }
    if (event.target.tagName == 'SPAN') {
        if (lastActiveTool != 0) {
            document.getElementById(lastActiveTool).classList.remove('active')
        }

        event.target.parentNode.classList.add('active')
        lastActiveTool = event.target.parentNode.id;
        console.log('hi[jwdb')

        // убираем цвет из предыдущей выбранной категории (если есть)

    }
})