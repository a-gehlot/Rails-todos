import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/root_reducer";
// import { thunk } from '../middleware/thunk'
import thunk from 'redux-thunk'

let preloadedState;

if (window.localStorage.state) {
    preloadedState = JSON.parse(window.localStorage.state);
} else {
    preloadedState = {}
}


const store = configureStore({ reducer: rootReducer, preloadedState, middleware: [thunk] })

const addLocalStore = () => {
    localStorage.state = JSON.stringify(store.getState())
}

// store.subscribe(addLocalStore);


export default store;