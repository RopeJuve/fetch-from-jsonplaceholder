import React from "react";
import "./UserList.css";

const User = ({ name, userName, email, phone }) => {
  return (
    <div className="Card">
      <img src="https://gomendracollege.edu.np/Images/Default/default.png" />

      <p>Name: {name}</p>

      <p>User Name: {userName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default User;
