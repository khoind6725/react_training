import * as Types from './../constants/ActionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CARD,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const removeProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}