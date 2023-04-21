import { useState } from 'react'
import React  from 'react'
import Details from './Details'
import './style.css'
import { Link, Route } from 'react-router-dom'

export default function (props) {
  

  return (
    <div >



<h1 id='user'>user Name :{props.fullName} id : {props.id}</h1>
<h2 style={{position:'relative',top:'-50px'}}>All Product </h2>

{props.products.map((val,index)=>{
  return   <Details key={index}  products = {val.products} price = {val.price}  index ={index}   />
})}

<Link to={'/PageBankai'}><button onClick={()=>{props.delUser(props.index)}} id='cancel'>Delete a user</button></Link>
    </div>
  )
}
