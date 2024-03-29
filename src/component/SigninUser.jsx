import React , {useReducer, useState} from 'react'
import PageBankai from './PageBankai'
import { Link, useNavigate } from 'react-router-dom'
import PageUser from './PageUser'
import './style.css'

export default function SigninUser(props) {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
const nav = useNavigate()

const loginAdmin = ()=>{
  if(userName === 'admin' && password === 'admin' ){
    nav('/pageBankai')
  }
else{
    return
}
  
 


}


const login = ()=>{
  props.userName.map((val,index)=>{

  
    if( userName != val.fullName  ){
    document.getElementById('m').innerHTML = 'User Name Or Password Eror'
    return
    }
    if(password != val.password){
      document.getElementById('m').innerHTML = 'User Name Or Password Eror'
      return
    }
    else{
      nav(`/user/${val.fullName}`)
    }

    
    
  })
    
   

 
   
 


}

  return (
    <div  class="centered" >
    <div id='div1'> 
    <div class="content">
<h1>Sign In</h1>
<br />
<br />
<input className='inpt' onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='User Name' />
<br />
<br />
<input className='inpt'  onChange={(e)=>{setPassword(e.target.value)}}  type="password"  placeholder='Password'/>
<br />
<br />
<Link to={'/register'} ><a  href="">create new user</a></Link>
<br />
<br />
<button id='buttonLogin' onClick={()=>{login(userName,password);loginAdmin(userName,password)}}>Enter</button>

<h2 id='m' ></h2>
</div>
</div>
    </div>
  )
}
