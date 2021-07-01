import React from 'react'
import User from './User'
import Grid from '@material-ui/core/Grid';
import './UserList.css'

export default function UserList(props) {
    return (

        <div className="Grid">
        <Grid container spacing={2}>


            {
                props.userData.map((user) =>
                    <Grid item xs={4} key={user.id}> <User
                        name={user.name}
                        userName={user.username}
                        email={user.email}
                        phone={user.phone}
                    /></Grid>)
            }


        </Grid>
        </div>
    )
}
