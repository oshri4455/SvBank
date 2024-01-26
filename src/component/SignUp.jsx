import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import User from './User'


export default function SignUp(props) {

const [fullName, setFullName] = useState('')
const [id,setId] = useState('')
const [Password,setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [money,setMoney] = useState(0)


const nav = useNavigate()





const createUser = ()=>{
  const users =props.userName.some(user => user.id === id || user.fullName === fullName);
  if(users){
    alert('User already exists');
    return
  }
  const pattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (!pattern.test(Password)) {
    alert('password not mach')
    return
 
  }

 if(fullName.length <= 4){
  alert('fullName need to be 4 char')
  return 
}


if(id.length !== 9){// בודק אם האורך אינו 9 
alert('the id must be 9 ')
return;
}
if(isNaN(id) ){  // בודק אם זה לא מספר מה שהוזן
alert('the id must be a number')
return
}
if(Password != confirmPassword){
  alert('password not the same')
  return 
}
if(money < 0  || money > 1000000){
  alert('the money smal or beeg ')
  return 
}
if(Password != confirmPassword){
alert('the password not the same');
return
}
else{
  props.add(fullName,Password,confirmPassword,id,money)// רק אם הכל נכון ולא התבצעה עד עכשיו החזרה אז הוא יפעיל את הפונקציה של ההוספה ולאר מכן יעביר לעמוד
  nav('/SigninUser')
}
   


   
  }



  


  return (
    <div class="centered">
      <div id='div1' >
        <div class="content">
        <h1>Register</h1>
        <input className='inpt' onChange={(e)=>{setFullName(e.target.value)}} type="text" placeholder='fullName'  />
        <br />
        <br />
        <input className='inpt' onChange={(e)=>{setId(e.target.value)}} type="text" placeholder='id'  />
        <br />
        <br />
        <input className='inpt' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
        <br />
        <br />
        <input className='inpt' onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder='confirm Password'/>
        <br />
        <br />
        <input className='inpt' onChange={(e)=>{setMoney(e.target.value)}} type="number" placeholder='Money' />
        <br />
        <br />
        <button id='buttonSignUp' onClick={createUser}>create</button>
        </div>
    </div>
    </div>
  )
}
