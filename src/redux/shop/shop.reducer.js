

import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

/**
 * It takes in the current state and an action, and returns the next state
 * @param [state] - the current state of the reducer
 * @param action - This is the action object that was dispatched.
 * @returns The state is being returned.
 */
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;