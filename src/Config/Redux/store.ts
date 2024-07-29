import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";
import Employeedata from "./Reducers/Employee"
import LoginSlice from "./Reducers/Login";
import SingupSlice from "./Reducers/Login";
const store = configureStore({
    reducer:{
        user:userSlice,
        employee:Employeedata,
        LoginDetail:LoginSlice,
        SingupDetail:SingupSlice

    },
})
export default store