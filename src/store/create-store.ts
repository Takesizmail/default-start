import {applyMiddleware, createStore, compose} from "redux"
import rootReducer from "./modules";
import thunkMiddleware from 'redux-thunk'

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunkMiddleware)))
export default store;