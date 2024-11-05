import { getAllProductByIdReducer, getAllProductsReducer } from "./reducers/productReducer.js";
import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'


const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getAllProductByIdReducer : getAllProductByIdReducer

})

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, composeEnhancers(
    applyMiddleware(thunk))
)

// const store = createStore(finalReducer, applyMiddleware(thunk))


export default store