export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function addProduct(id, name, price, type) {
    const product = {
        id,
        name,
        price,
        type
    };

    return {
        type: ADD_PRODUCT,
        product
    };
};

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        id
    };
};