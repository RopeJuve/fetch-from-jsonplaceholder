import React from 'react'
import './UserList.css'


export default function User(props) {
    return (
        <div className='Card'>
            <img src='https://gomendracollege.edu.np/Images/Default/default.png'/>
            <p>Name: {props.name}</p>
            <p>User Name: {props.userName}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>

        </div>
    )
}
