import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/root_reducer";
// import { thunk } from '../middleware/thunk'
import thunk from 'redux-thunk'


const store = configureStore({ reducer: rootReducer, middleware: [thunk] })


export default store;