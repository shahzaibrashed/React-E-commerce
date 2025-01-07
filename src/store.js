import { configureStore } from "@reduxjs/toolkit"
import cartSystem from '../src/redux/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import {combineReducers} from '@reduxjs/toolkit'
import wishSystem from "../src/redux/wishSystem"
const persistConfig = {
    key:"root",
    version:"1",
    storage
}

const reducer = combineReducers(
    {
        cartsItem : cartSystem,
        wishlist : wishSystem,
    }
)

const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer: persistedReducer
})
export default store