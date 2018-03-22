import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [
    {
        product: {
            id: 1,
            name: 'Iphone 6 plus',
            image: window.location.href + 'img/products/iphone-6-plus.jpg',
            description: 'Sản phẩm sản xuất bởi Apple',
            price: 400,
            inventory: 20,
            rating: 5
        },
        quantity: 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CARD:
            console.log(action);
            return [...state];
        default:
            return [...state];
    }
}

export default cart;