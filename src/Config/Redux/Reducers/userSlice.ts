import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
id:1,
name:'abc'
    },
    reducers:{
        add:(state,action)=>{
            state.name=action.payload 
        },
        del:(state,action)=>{}
    },
})
export const {add} = userSlice.actions
export default userSlice.reducer
