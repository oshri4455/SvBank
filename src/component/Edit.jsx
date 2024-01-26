import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Edit = (props) => {

  const[lastPassword,setlastPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [money,setMoney] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      fullName:props.fullName,
      id:props.id,
      password: newPassword || lastPassword, // Use the new password if it exists, otherwise use the last password
      confirmPswword: confirmPassword,
      money: money,
      products:props.products
     
    };
    if(newPassword === lastPassword){
      alert('The sharp password is the same as the previous password');
      return
    }
    const pattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!pattern.test(newPassword)) {
      alert('password not mach')
      return
   
    }
    if(lastPassword != props.password){
      alert('The previous password is not the same as the current password')
      return 
    }
    if(newPassword != confirmPassword){
      alert('the new password not the smae the confirm password');
      return
    }
    props.updateUser(props.index, updatedUser);
    setlastPassword(updatedUser.password); // Update the state of the last password
  };
  return (
    <div style={{position:'relative',top:'50px'}} id='div1'>
      <h1>Edit</h1>
        <input className='inpt'  onChange={(e)=>{setlastPassword(e.target.value)}} type="password" placeholder='last Password' value={lastPassword} />
        <br />
        <br />
        <input className='inpt'  onChange={(e)=>{setNewPassword(e.target.value)}} type="password" placeholder='new Password' value={newPassword} />
        <br />
        <br />
        <input className='inpt'  onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder='confirm Password' value={confirmPassword}/>
        <br />
        <br />
        <input className='inpt'  onChange={(e)=>{setMoney(e.target.value)}} type="number" placeholder='Money' value={money} />
        <br />
        <br />
        <button id='btn' type='button' onClick={handleFormSubmit}>Update</button>
      
    </div>
  )
}

export default Edit;