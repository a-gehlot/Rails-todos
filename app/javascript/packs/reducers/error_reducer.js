import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const initialState = [];

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return [...state, action.errors];
        case CLEAR_ERRORS: 
            return [];
        default:
            return state
    }
}

export default errorReducer;