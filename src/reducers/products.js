var initialState = [
    {
        id: 1,
        name: 'Iphone 6 plus',
        image: window.location.href + 'img/products/iphone-6-plus.jpg',
        description: 'Sản phẩm sản xuất bởi Apple',
        price: 400,
        inventory: 20,
        rating: 5
    }, 
    {
        id: 2,
        name: 'Samsung galaxy S8',
        image: window.location.href + 'img/products/samsung-galaxy-s8.png',
        description: 'Sản phẩm sản xuất bởi Samsung',
        price: 600,
        inventory: 15,
        rating: 4
    }, 
    {
        id: 3,
        name: 'HTC U11',
        image: window.location.href + 'img/products/htc-u11.jpg',
        description: 'Sản phẩm sản xuất bởi HTC',
        price: 550,
        inventory: 10,
        rating: 3
    }
]

const product = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default product;