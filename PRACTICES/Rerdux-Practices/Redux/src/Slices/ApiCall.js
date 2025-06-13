import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const crateApi = createAsyncThunk('user/fetch', async () => {

    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return data
})


const ApiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        error: '',
        loading:false
    },
    extraReducers: (builder) => {
        builder
          .addCase(crateApi.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(crateApi.fulfilled, (state, action) => {
            state.data = action.payload;
          })
          .addCase(crateApi.rejected, (state, action) => {
            state.error = action.payload;
          });
    }
})

export default ApiSlice.reducer