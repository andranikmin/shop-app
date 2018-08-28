import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

const initialState = {
    products: [] 
};

export default function seller(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.product
                ]
            };
        }
        case DELETE_PRODUCT: {
            const productsClone = [...state.products];
            const index = productsClone.findIndex(product => product.id === action.id);
            productsClone.splice(index, 1);

            return {
                ...state,
                products: productsClone
            };
        } 

        default:
            return state;
    }
}
