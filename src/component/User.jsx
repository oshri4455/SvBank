import { useState } from 'react'
import React  from 'react'

import './style.css'
import { Link, Route } from 'react-router-dom'

export default function (props) {
  
  let totalPrice = props.products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
  

  return (
    <div id='cover'>


<Link  to={'/'}><button id='buttonExit'>Exit</button></Link>
<h1 >user Name :{props.fullName} id : {props.id}</h1>

<h3 style={{color:'white',fontSize:'30px'}}>balance : {`${props.money}$`}</h3>




<table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
     {props.products.map((val,index)=>{
      return  <tr key={index}>
      <td>{val.product}</td>
      <td>{val.price}</td>
    </tr>
     })}
     

  
      </tbody>
    </table>
    <h3 style={{color:'yellow'}}>Sum Price = {totalPrice}</h3>
<br />
<br />
<Link to={'/PageBankai'}><button onClick={()=>{props.delUser(props.index)}}
 id='cancel'>Delete a user</button></Link>

    </div>
  )
}
