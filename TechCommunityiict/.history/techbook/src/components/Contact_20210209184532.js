import React from 'react'
import './Contact.css'

const Contact=({Icon,Link})=>{
    return(
        <div className="contactrow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon/>}

            <a href="mailto:contact@test.com"><span></span>{Link}</a>

        </div>
    )
}

export default Contact;