export const RECEIVE_TODOS = "RECEIVE_TODOS"
export const RECEIVE_TODO = "RECEIVE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
import * as APIUtil from '../util/todo_api_util'
import { CLEAR_ERRORS, receiveErrors } from './error_actions'

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
    }
}

export const fetchTodos = () => dispatch => {
    APIUtil.fetchTodos().then(res => 
        dispatch({
            type: RECEIVE_TODOS,
            todos: res,
        })
    )
}

export const createTodo = (todo) => dispatch => {
    return(APIUtil.postTodo(todo)
        .then((res) => {
            dispatch({
                type: RECEIVE_TODO,
                todo: res
            });
            dispatch({
                type: CLEAR_ERRORS
            })
        }, 
        err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const updateTodo = (todo) => dispatch => {
    console.log(todo)
    return(APIUtil.updateTodo(todo)
    .then((res) => {
        console.log(res)
        dispatch({
            type: RECEIVE_TODO,
            todo: res
        })
    },
    (err) => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const deleteTodo = (todo) => dispatch => {
    return(APIUtil.deleteTodo(todo)
    .then(() => {
        dispatch({
            type: REMOVE_TODO,
            todo: todo
        })
    },
    (err) => dispatch(receiveErrors(err.responseJSON)))
    )
}