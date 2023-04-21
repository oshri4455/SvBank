import React , {useState} from 'react'
import './style.css'

export default function Details(props) {

   
  return (
    <div id='divDetails'>

<table id='x'>

<td >product:{props.products}</td>
<td>price:{props.price}</td>



</table>








      
    </div>
  )
}
