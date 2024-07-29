import { createSlice } from "@reduxjs/toolkit";

const SingupSlice = createSlice({
    name:'SingupDetail',
    initialState:{
        Singup:{
            email:'',
            password:""
        }
        
    },
    reducers:{
        add:(state,action)=>{},
        del:(state,action)=>{}
    }
})