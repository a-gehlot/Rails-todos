import { RECEIVE_STEP, REMOVE_STEP, RECEIVE_STEPS } from "../actions/step_actions";


const stepsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_STEPS:
            let nextState = Object.assign({}, state);
            action.steps.forEach((step) => nextState[step.id] = step);
            return nextState;

        case RECEIVE_STEP: 
            return {
            ...state,
            [action.step.id]: action.step
        }

        case REMOVE_STEP:
            const next = {...state};
            delete next[action.step.id];
            return next;

        default:
            return state;
    }
}

export default stepsReducer;