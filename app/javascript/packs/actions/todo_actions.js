export const RECEIVE_TODOS = "RECEIVE_TODOS"
export const RECEIVE_TODO = "RECEIVE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
import * as APIUtil from '../util/todo_api_util'

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    }
}

export const receiveTodo = (todo) => {
    console.log('got here')
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
    APIUtil.postTodo(todo).then(res => {
        dispatch({
            type: RECEIVE_TODO,
            todo: res,
        })
    })
}

// export const createTodo = todo => dispatch => (
//     TodoAPIUtil.createTodo(todo)
//         .then(todo => { dispatch(receiveTodo(todo)); dispatch(clearErrors()) },
//             // err => dispatch(receiveErrors(err.responseJSON)))
// ));