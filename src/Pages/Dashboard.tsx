import PrimarySearchAppBar from '../Components/navbar'
import CustomizedTables from '../Components/Table'
import BasicSwitches from '../Components/Switch'
import CheckboxLabels from '../Components/Checkbox'
import RadiosCom from '../Components/Radio'
import GridCom from '../Components/Grid'
import DialogCom from '../Components/Dialogbox'
import BasicAlerts from '../Components/Alert'
import { Button ,TextField } from '@mui/material' 
import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Config/Redux/Reducers/userSlice'
import { get } from 'http'
export default function Home(){
   const [inp,setinp] =useState("") 
 const userSlicedata = useSelector((a:any)=>a)
 const dispatch =useDispatch()
 const updatedata = ()=>{
    dispatch(add(inp))
    console.log(userSlicedata)
 }

 console.log(userSlicedata)
 return(<>
    <PrimarySearchAppBar value1="Singup" path="/Singup" value2="Login" path2="/Login"/>
    <h1 className='fw-bold fs-1 opacity-75'>{userSlicedata.user.name}</h1>
    <Button onClick={updatedata} variant='contained'>Update Data</Button>
    <TextField placeholder='write here' sx={{width:1200, display:"flex",paddingLeft:10 ,marginTop:2}} color='success' onChange={(e:any)=>{
setinp(e.target.value)
    }}/>
    </>)
}