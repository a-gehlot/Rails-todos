import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import store from './store/store';
import { receiveTodo, receiveTodos, removeTodo, fetchTodos } from "./actions/todo_actions"
import { receiveStep, receiveSteps, removeStep, fetchSteps } from "./actions/step_actions"
import { allTodos, stepsByTodoId } from './reducers/selectors';
import App from "./components/App"
import Root from './components/root';
import * as APIUtil from "./util/todo_api_util"


window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.removeStep = removeStep;
window.allTodos = allTodos
window.stepsByTodoId = stepsByTodoId;
window.fetchTodos = fetchTodos;
window.APIUtil = APIUtil;
window.fetchSteps = fetchSteps;



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container)
    root.render(
        <Root store={store}/>
    )
})