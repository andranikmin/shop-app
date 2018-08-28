import { ADD_TO_SHOPPING_CARD,
    SET_TOTAL_PRICE,
    DELETE_SHOPPING_CARD_PRODUCT,
    SHOW_CHECKOUT,
    CLOSE_POPUP
} from './actions';

const initialState = {
    shoppingCard: [],
    total: 0,
    checkout: false
};

export default function buyer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_SHOPPING_CARD: {

            const index = state.shoppingCard.findIndex(product => 
                product.id === action.product.id);

            if (index > -1) {
                const cloneShoppingCard = [ ...state.shoppingCard ];
                const cloneProduct = { ...cloneShoppingCard[index] };
                cloneProduct.count = (+cloneProduct.count) + 1;
                cloneProduct.total = (+cloneProduct.total) + (+cloneProduct.price);
                const total = (+state.total) + (+cloneProduct.price);
                cloneShoppingCard[index] = cloneProduct;

                return {
                    ...state,
                    shoppingCard: cloneShoppingCard,
                    total
                }
            } else {
                const cloneProduct = { ...action.product };
                cloneProduct.count = 1;
                cloneProduct.total = cloneProduct.price;

                const total = (+state.total) + (+cloneProduct.total);

                return {
                    ...state,
                    shoppingCard: [
                        ...state.shoppingCard,
                        cloneProduct
                    ],
                    total
                };
            }
        }

        case SET_TOTAL_PRICE: {
            const index = state.shoppingCard.findIndex(product => 
                product.id === action.id);

            if(action.action === "add"){
                state.shoppingCard[index].count = (+state.shoppingCard[index].count) + 1;
                state.shoppingCard[index].total = (+state.shoppingCard[index].total) + (+action.price);
                const total = (+state.total) + (+action.price);

                return {
                    ...state,
                    total
                };
            }
            else if(action.action === "remove" && state.shoppingCard[index].count !== 1){
                state.shoppingCard[index].count = (+state.shoppingCard[index].count) - 1;
                state.shoppingCard[index].total = (+state.shoppingCard[index].total) - (+action.price);
                const total = (+state.total) - (+action.price);

                return {
                    ...state,
                    total
                };
            }
            else{
                return {
                    ...state,
                }
            }
        }
        case DELETE_SHOPPING_CARD_PRODUCT:{
            const productClone = [...state.shoppingCard];
            const index = productClone.findIndex(product => product.id === action.id);

            if(index > -1){
                const total = (+state.total) - (+productClone[index].total);
                productClone.splice(index, 1);
                
                return {
                    ...state,
                    shoppingCard: productClone,
                    total
                };
            }else{
                return {
                    ...state,
                };
            }
            
        }
        case SHOW_CHECKOUT:{
            return {
                ...state,
                checkout: true
            };
        }

        case CLOSE_POPUP:{
            return {
                ...initialState,
            };
        }

        default:
            return state;
    }
}
