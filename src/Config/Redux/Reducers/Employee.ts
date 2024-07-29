import { createSlice } from "@reduxjs/toolkit"
const Employeedata = createSlice({
    name:"employee",
    initialState:{
id:2,
name:'xyz'
    },
    reducers:{
        add:(state,action)=>{},
        del:(state,action)=>{}
    }
})

export default Employeedata.reducer