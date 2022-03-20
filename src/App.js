import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const fechData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = data.map((user) => {
      return {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      };
    });
    setUsers(userData);
  };
  useEffect(() => {
    fechData();
  });
  return (
    <div className="App">
      <header className="App-header">Fetch from Jsonplaceholder</header>
      <UserList userData={users} />
    </div>
  );
};

export default App;
