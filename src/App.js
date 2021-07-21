import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([]);
  const fechData = async ()=>{
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')  
    const userData = responce.data.map((user)=>{
      return {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      }
    })
    setUsers(userData);

  }
  useEffect(() => {
    fechData();
  })
  return (
    <div className="App">
      <header className="App-header">
        Mojta prva API
      </header>
      <UserList userData={users} />
    </div>
  );
}

export default App;
