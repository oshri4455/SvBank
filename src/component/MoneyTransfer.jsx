import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function MoneyTransfer(props) {

  const [id, setId] = useState('')
  const [money, setMoney] = useState(0) 
const nav = useNavigate()


  const transfer = ()=>{
    props.transferMoney(props.index,id,money)
    nav(`/user${props.fullName}`)
  }

  return (
    <div>
      <h1>Money Transfer</h1>
      <input className='inpt1' onChange={(e) => {setId(e.target.value)}} type="text" placeholder='Enter id Name'/>
      <br />
      <br />
      <input className='inpt1'  onChange={(e) => {setMoney(e.target.value)}} type="text" placeholder='Enter sum of money' />
      <br />
      <br />
      <button onClick={transfer} id='button1'>Transfer</button>
    </div>
  );
}