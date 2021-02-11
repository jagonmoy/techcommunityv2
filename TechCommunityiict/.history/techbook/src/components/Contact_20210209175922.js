import React from 'react'
import './Contact.css'

const Contact=({Icon,Link})=>{
    return(
        <div className="contactrow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon/>}

            <p>{Link}</p>

        </div>
    )
}

export default Contact;