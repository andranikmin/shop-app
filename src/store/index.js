import { combineReducers, createStore } from 'redux';
import seller from './seller/reducer';
import buyer from './buyer/reducer';

const rootReducer = combineReducers({
    seller,
    buyer
});

const store = createStore(
    rootReducer
);

export default store;
