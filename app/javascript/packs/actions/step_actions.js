export const RECEIVE_STEPS = "RECEIVE_STEPS"
export const RECEIVE_STEP = "RECEIVE_STEP"
export const REMOVE_STEP = "REMOVE_STEP"
import * as APIUtil from '../util/steps_api_util'
import { CLEAR_ERRORS, receiveErrors } from './error_actions'

export const receiveSteps = (steps) => {
    return {
        type: RECEIVE_STEPS,
        steps,
    }
}

export const receiveStep = (step) => {
    return {
        type: RECEIVE_STEP,
        step,
    }
}

export const removeStep = (step) => {
    return {
        type: REMOVE_STEP,
        step,
    }
}

export const fetchSteps = () => dispatch => {
    return(APIUtil.fetchSteps().then(res => {
        dispatch({
            type: RECEIVE_STEPS,
            steps: res
        })
    }))
}

export const createStep = (step) => dispatch => {
    return(APIUtil.postStep(step)
        .then((res) => {
            dispatch({
                type: RECEIVE_STEP,
                step: res
            });
            dispatch({
                type: CLEAR_ERRORS
            })
        }, 
        err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const updateStep = (step) => dispatch => {
    return(APIUtil.updateStep(step)
    .then((res) => {
        dispatch({
            type: RECEIVE_STEP,
            step: res
        })
    },
    err => dispatch(receiveErrors(err.responseJSON)))   
    )
}

export const deleteStep = (step) => dispatch => {
    return(APIUtil.deleteStep(step)
    .then(() => {
        dispatch({
            type: REMOVE_STEP,
            step: step
        })
    },
    err => dispatch(receiveErrors(err.responseJSON)))
    )
}