import React from 'react'
import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import Contact from './Contact'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './profiletop.css'

const Profiletop = ()=>{

    const [{user},dispatch]=useStateValue();
    return(
        // <div className="profiletop">
        // <div className="profilecontainer">
        // <div className="topprofile">
        // <div classname="profile_pic"><img src="https://i.imgur.com/EppVS5R.png"/></div>
        // <h4 id="name">Name: <span id="username">{user.displayName}</span></h4>
        // <Contact Icon={EmailIcon} Link={user.email}/>
        // <Contact Icon={GitHubIcon} Link={user.email}/>
        // <Contact Icon={LinkedInIcon} Link="Linked In"/>

        
        // {/* <h3 id="email"><a href="mailto:{user.email}"><span id="useremail">{user.email}</span></a></h3> */}
        // </div>
        // </div>
        // </div>

        <div className="teachercontainer">
        <div className="main-box">
      <div className="big-circle">
        <div className="small-circle"><img src={product.imglink}/></div>
      </div>
      <h2 className="heading-name">{name}</h2>
      <h3 className="heading-work">{product.position}</h3>
      <h2 className="heading-name">{product.email}</h2>
      <p className="info">
        {product.Phone}
      </p>
      <a href="#" className="follow_btn">{product.Details}</a>
    </div>
    </div>
    )
    
}

export default Profiletop;