// src/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
};

 const userSlice = createSlice({
  name: 'users',
  initialState, // ✅ use the correct key here
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((val, index) => index !== action.payload);
    }
  }
});

export const { setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
