import CartActionTypes from './cart.types';

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    carteItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                carteItems: addItemToCart(state.carteItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;