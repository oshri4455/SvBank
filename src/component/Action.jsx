import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function (props) {
  const [price,setprice] = useState(0)
  const [products,setproducts]=useState('')
const nav = useNavigate()
  const checkProducts = () => {
    const newBalance = props.money - price;
    if (price < 0) {
      alert('Invalid price');
    } else if (newBalance < 0) {
      alert('There is not enough money in the account');
    } else {
      alert('Product added');
      props.addProducts(props.index, products, price, newBalance);
      props.updateUserMoney(newBalance);
      console.log('Price:', price);
      nav(`/user${props.fullName}`)

    }
  }
  return (

    <div>
<input className='inpt1' onChange={(e)=>{setprice(e.target.value)}} type="number" placeholder='Enter price'  />
 <br />
 <br />
 <input className='inpt1' onChange={(e)=>{setproducts(e.target.value)}}  type="text"  placeholder='Enter Product'/>
 <br />
 <br />
 <button id='button1' onClick={checkProducts}>send</button>

    </div>
  )
}
