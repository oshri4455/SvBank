import logo from './logo.svg';
import './App.css';
import SigninUser from './component/SigninUser';
import {HashRouter,Routes,Route} from 'react-router-dom'
import SignUp from './component/SignUp';
import { useState } from 'react';
import PageBankai from './component/PageBankai';
import PageUser from './component/PageUser';
import Action from './component/Action';
import Edit from './component/Edit'

import {Provider} from './contextApi'
import User from './component/User';
import MoneyTransfer from './component/MoneyTransfer';
import Home from './component/Home';







function App() {

const [userName, setUserName] = useState([])



const addUserName = (fullName,password,confirmPswword,id ,money)=>{

let temp = 
{
  fullName:fullName,
  id:id,
  password:password,
  confirmPswword:confirmPswword,
  money:money,
  products:[]
}
setUserName([...userName,temp])


}


 
const addProducts = (index, pr, p) => {
  let newUsers = [...userName]; // יצירת עותק של המערך הנוכחי של userName
  let userToUpdate = {...newUsers[index]}; // יצירת עותק של המשתמש הספציפי

  let newProduct = { product: pr, price: p }; // יצירת אובייקט מוצר חדש

  if (!userToUpdate.products) {
    userToUpdate.products = []; // אם אין מערך products, צור אחד חדש
  }

  userToUpdate.products.push(newProduct); // הוספת המוצר החדש למערך המוצרים של המשתמש

  newUsers[index] = userToUpdate; // עדכון המערך עם המשתמש המעודכן

  setUserName(newUsers); // עדכון ה-state עם המערך החדש
}
const delUser = (index)=>{
  let temp = [...userName];
  temp.splice(index,1)
  setUserName([...temp])
  
  }

  const updateUser = (index, updatedUser) => {
    const updatedUsers = [...userName];
    updatedUsers[index] = updatedUser;
    setUserName(updatedUsers);
  };
  const updateUserMoney = (newMoney) => {
    const updatedUser = {...userName[0],money: newMoney  };
    setUserName([updatedUser, ...userName.slice(1)]); // עדכון המערך של המשתמשים
  }
  const transferMoney = (currentIndex, recipientId, amount) => {
    const updatedUsers = [...userName];
    const currentUser = updatedUsers[currentIndex];
    const recipientUserIndex = updatedUsers.findIndex(user => user.id === recipientId);
    const recipientUser = updatedUsers[recipientUserIndex];
  
    if (recipientUserIndex === -1) {
      alert(`User with ID ${recipientId} not found`);
      return;
    }
  
    const parsedAmount = parseInt(amount);
  
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Invalid amount");
      return;
    }
  
    if (currentUser.money < parsedAmount) {
      alert("Insufficient funds");
      return;
    }
  
    currentUser.money -= parsedAmount;
    recipientUser.money = parseInt(recipientUser.money) + parsedAmount;
  
    setUserName(updatedUsers);
    alert(`Transferred ${parsedAmount} from ${currentUser.fullName} to ${recipientUser.fullName}`);
  };
  return (
    <div className="App">
      <h1 id='title'>Sv Bank</h1>
<HashRouter>
<Routes>

<Route path='/'  element = {<Home           />}     />
   <Route path='/SigninUser' element = {<SigninUser add = {addUserName} userName = {userName}/>}  />


 <Route path='/register' element = {<SignUp add={addUserName} userName = {userName} />}/>

{userName.map((val,index)=>{
  return <Route path={`/Transfer/${val.fullName}`}  element = {<MoneyTransfer  transferMoney = {transferMoney} id = {val.id}  fullName = {val.fullName} userName = {userName} index = {index}  money = {val.money}      />}             />
})}


{userName.map((val,index)=>{
  return   <Route path='/PageBankai'  element = {<PageBankai   add = {addUserName} addProducts ={addProducts} fullName = {val.fullName} id = {val.id} delUser = {delUser} userName = {userName}   products = {val.products} price = {val.price} index = {index}  />} />
})}


   
{userName.map((val,index)=>{
  return <Route path={`/user/${val.fullName}`}  element = {<PageUser products = {val.products} addProducts = {addProducts}  fullName = {val.fullName} password = {val.password}  index = {index} money = {val.money} add = {addUserName} product = {val.product}/>}   />

})}

{userName.map((val,index)=>{
  return <Route path={`/action/${val.fullName}`}  element = {<Action updateUserMoney = {updateUserMoney} products = {val.products} userName ={userName} addProducts = {addProducts} updateUser = {updateUser} index = {index} money = {val.money} product = {val.product} fullName = {val.fullName} />} />

})}

{userName.map((val,index)=>{
  return <Route path={`/edit/${val.fullName}`} element = {<Edit  product = {val.product}  products = {val.products} userName = {userName} updateUser = {updateUser}  fullName = {val.fullName} id = {val.id} password = {val.password}  index ={index} money = {val.money}/>}  />

})}

{userName.map((val,index)=>{
  return <Route path={`/userDeatils/${val.fullName}`} element = {<User addProducts = {addProducts}  price = {val.price} product = {val.product} products = {val.products} delUser = {delUser}  fullName = {val.fullName} id = {val.id}   index = {index} money = {val.money} userName = {userName} />}                 />
})}

</Routes>
</HashRouter>








    </div>
  );
}

export default App;
