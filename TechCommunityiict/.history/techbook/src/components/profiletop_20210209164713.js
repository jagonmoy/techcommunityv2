import React from 'react'

import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import './profiletop.css'

const Profiletop = ()=>{

    const [{user},dispatch]=useStateValue();
    return(
        <div className="top_profile">
        <Avatar classname="profile_pic" src={user.photoURL}/>
        <h4 id="name">Name: <span id="username">{user.displayName}</span></h4>
        <h3 id="email">Email :<a href><span id="useremail">{user.email}</span></a></h3>
        </div>
    )
    
}

export default Profiletop;