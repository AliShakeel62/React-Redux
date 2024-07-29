import { useEffect, useState } from "react"
import Input from "../Components/Inp"
import Button from "../Components/btn"
import PrimarySearchAppBar from "../Components/navbar"
import { Update } from "@mui/icons-material"
import { useDispatch, useSelector, UseSelector } from "react-redux"
import { UseDispatch } from "react-redux"
import { update } from "../Config/Redux/Reducers/Login"
export default function Dame3(){
    const [Email,setEmail]= useState()
    const [Password,setPassword]= useState()
    const DataSelector = useSelector((a:any)=>a.LoginDetail)
    const dispatch = useDispatch()
    const updatedata = ()=>{
        dispatch(update({Email,Password}))
        console.log(DataSelector)
    }
    useEffect(()=>{
        console.log(DataSelector)
    },[])
    return(<>
        <PrimarySearchAppBar value1="Singup" path="/Singup" value2="Home" path2="/"/>
    <h1>Login</h1>
    <Input className="rounded-3 border-primary" placeholder="Email or Phone number" onChange={(e:any)=>{
          setEmail(e.target.value)
    }} />
    <br />
    <br />
   
     <Input className="rounded-3 border-primary" placeholder="Password" onChange={(e:any)=>{
        setPassword(e.target.value)
    }} />
    <br />
    <br />
    <Button name="Submitte" className="btn btn-primary rounded-3" onClick={updatedata}/>
    </>)
}