import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        users:[]
    },
    reducers: {
        setUser: (state, action) => {
            state.users = [...state.users,action.payload]
        }
    }
})


export const { setUser } = UserSlice.actions

export default UserSlice.reducer