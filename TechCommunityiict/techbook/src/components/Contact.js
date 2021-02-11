import React from 'react'
import './Contact.css'

const Contact=({Icon,Link})=>{
    return(
        <div className="contactRow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon/>}

            <a href="mailto:contact@test.com">{Link}</a>

        </div>
    )
}

export default Contact;