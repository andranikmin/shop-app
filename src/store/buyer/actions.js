export const ADD_TO_SHOPPING_CARD = 'ADD_TO_SHOPPING_CARD';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const DELETE_SHOPPING_CARD_PRODUCT = 'DELETE_SHOPPING_CARD_PRODUCT';
export const SHOW_CHECKOUT = 'SHOW_CHECKOUT';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export function addToShoppingCard(product) {
    return {
        type: ADD_TO_SHOPPING_CARD,
        product
    };
};

export function setTotal(price, id, action) {
    return {
        type: SET_TOTAL_PRICE,
        price,
        action,
        id
    };
};

export function deleteProduct(id) {
    return {
        type: DELETE_SHOPPING_CARD_PRODUCT,
        id
    };
};

export function showCheckout() {
    return {
        type: SHOW_CHECKOUT,
    };
};

export function closePopup() {
    return {
        type: CLOSE_POPUP,
    };
};