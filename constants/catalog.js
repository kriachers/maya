const ROOT_PRODUCTS = document.getElementById('products');

const CATALOG = [

    {
        id: 'el1',
        name: 'Трусы послеродовые',
        img: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1200/6243525814.jpg',
        price: 1100,
        label: 'хит продаж',
        color: ['бежевый'],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el2',
        name: 'Трусы послеродовые',
        img: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6243522893.jpg',
        price: 1100,
        color: ['черный'],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el3',
        name: 'Бандаж послеродовый',
        img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6089864979.jpg',
        price: 1150,
        color: ['голубой'],
        size: ["S", "M", "L", "XL"],
        category: 'бандаж'
    },

    {
        id: 'el3',
        name: 'Легинсы',
        img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6089864979.jpg',
        price: 1150,
        color: ["серый", "черный"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },

    {
        id: 'el4',
        name: 'Легинсы',
        img: 'https://cdn1.ozone.ru/s3/multimedia-x/wc1200/6143615949.jpg',
        price: 1150,
        color: ["серый", "черный"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },

    {
        id: 'el5',
        name: 'Бюстгальтер, Топ-бюстье мягкая чашка, послеродовая модель MAYA',
        img: 'https://cdn1.ozone.ru/s3/multimedia-h/wc1200/6243516725.jpg',
        price: 1150,
        color: ["розовый", "черный", "серый"],
        size: ["S", "M", "L", "XL"],
        category: 'бюсгальтер'
    },

    {
        id: 'el6',
        name: 'Хлопковые Легинсы Высокой Посадки в Стиле Колор-Блок',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwede7a9a5/images/1WP1237517U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 1150,
        color: ["голубой"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },

    {
        id: 'el7',
        name: 'Леггинсы из Искусственной Кожи',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwa19abe8c/images/1WP213_wear_019_FI.jpg?sw=1000&sfrm=png',
        price: 1190,
        color: ["черный"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },


    {
        id: 'el8',
        name: 'Леггинсы Базовые из Хлопка',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwa8e16e96/images/1WP752_wear_4987_FI.jpg?sw=1000&sfrm=png',
        price: 1190,
        color: ["серый"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },

    {
        id: 'el8',
        name: 'Леггинсы Базовые из Хлопка',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwa8e16e96/images/1WP752_wear_4987_FI.jpg?sw=1000&sfrm=png',
        price: 1190,
        color: ["серый"],
        size: ["S", "M", "L", "XL"],
        category: 'лосины'
    },

    {
        id: 'el9',
        name: 'Трусики-Бразильяна из Микрофибры с Необр. Краями',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwdf4cb1e7/images/1SB01V825U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 699,
        color: ['розовый'],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el10',
        name: 'Бразильяно из Микрофибры с Высоким Вырезом Бедра и Необработанными Краями',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwd61101d6/images/1SB01SV869U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 699,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el11',
        name: 'Бразильяно из Переработанного Кружева и Микрофибры с Необработанными Краями',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dwa4225504/images/1SB2060V825U-FI.jpg?sw=800&sfrm=jpeg',
        price: 699,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el12',
        name: 'Высокие Бразильяно',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw1e685d17/images/1SB1451019-FI.jpg?sw=1000&sfrm=jpeg',
        price: 899,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el13',
        name: 'Cтринги из Переработанного Кружева с Высоким Вырезом Бедра',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw2ad2f256/images/1SP060S802U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 299,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'трусы'
    },

    {
        id: 'el14',
        name: 'Бюстгальтер-Треугольник из Переработанной Микрофибры Lisbon',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw97304735/images/1TS010869U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 1399,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'бюсгальтер'
    },

    {
        id: 'el14',
        name: 'Бюстгальтер-Балконет Paris из Переработанного Кружева без Уплотнения',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw412989df/images/1RB060825U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 1399,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'бюсгальтер'
    },

    {
        id: 'el14',
        name: 'Бюстгальтер-Балконет Paris из Переработанной Микрофибры',
        img: 'https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw9bda4365/images/1RB010A869U-FI.jpg?sw=1000&sfrm=jpeg',
        price: 1699,
        color: ["розовый", "черный", "белый"],
        size: ["S", "M", "L", "XL"],
        category: 'бюсгальтер'
    }
]


let filterCategoryCATALOG = CATALOG;