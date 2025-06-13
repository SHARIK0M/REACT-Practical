import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";
import ApiReducer from '../Slices/ApiCall'


const store = configureStore({
    reducer: {
        userInfo: userReducer,
        ApiCall:ApiReducer
    }
})

export default store

