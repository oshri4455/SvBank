import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import User from './User'

import './style.css'



export default function PageBankai(props) {


 




  return (

    <div >

      {props.userName.map((val,index)=>{
        return <h1 id='h1a' key={index} >  fullName : {val.fullName}  id : {val.id} <Link to={`/userDeatils/${val.fullName}`}><button id='show'></button></Link> </h1>
         
     
      })}
   

   

  
</div>

  
  
  








  )
}
