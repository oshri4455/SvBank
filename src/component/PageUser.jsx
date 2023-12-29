import React from 'react'
import { Link } from 'react-router-dom'

export default function PageUser(props) {
 
  return (
    <div>
      <h1>{`welcome:${props.fullName}`}</h1>
<button className='button' onClick={()=>{alert(props.money)}}>Balance</button> <Link to={`/action/${props.fullName}`}><button className='button' >Action</button></Link>
<br />
<br />
<Link to={`/edit/${props.fullName}`}><button className='button' >Edit</button ></Link> <Link to={`/Transfer/${props.fullName}`}><button id='button2'>Money Transfer</button></Link>   
<br />
<br />
<Link to={'/'}><button className='button' >Exit</button></Link>   
    </div>
  )
}
