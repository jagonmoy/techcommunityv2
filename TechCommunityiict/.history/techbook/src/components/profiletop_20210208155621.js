import React from 'react'
import { useStateValue } from '../StateProvider'

const profiletop()=>{

    const [{user},dispatch]=useStateValue();
    return(
        <div className="top_profile">
        <Avatar classname="profile)"src={user.photoURL}/>
        </div>
    )
    
}