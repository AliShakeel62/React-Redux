import { createSlice } from "@reduxjs/toolkit";
const LoginSlice = createSlice({
    name:"LoginDetail",
    initialState:{
auth:true,
loginDetail:{
    email:'',
    password:""
}
    },
    reducers:{
        update:(state,action)=>{
            state.loginDetail = action.payload
        },
        del:(state,action)=>{}
    }

})
export const {update} = LoginSlice.actions
export default LoginSlice.reducer