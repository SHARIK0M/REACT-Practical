
import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('user/fetch',async ()=>{
     let res = await fetch('https://jsonplaceholder.typicode.com/users')
     let result = await res.json()
     return result
})


const ApiSlice = createSlice({
    name:'data',
    initialState:{
        data : [],
        loading : true,
        error:''
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }

})

export default ApiSlice.reducer