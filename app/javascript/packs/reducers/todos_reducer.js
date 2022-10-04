import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";


const todosReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_TODOS: 
        let nextState = Object.assign({}, state);
        action.todos.forEach((todo) => {
            nextState[todo.id] = todo;
        })
        return nextState;
        case RECEIVE_TODO: return {
            ...state,
            [action.todo.id]:  action.todo
        }
        case REMOVE_TODO:
            nextState = Object.assign({}, state);
            delete nextState[action.todo.id];
            return nextState;
        default: 
            return state;
    }
}

export default todosReducer