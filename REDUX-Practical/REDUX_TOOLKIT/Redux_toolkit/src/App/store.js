import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import  ApiReducer from '../slices/ApiSlice'


const store = configureStore({
  reducer: {
    userInfo: userReducer,
    ApiUsing:ApiReducer
  }
});

export default store;
