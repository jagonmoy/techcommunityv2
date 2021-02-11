import React from 'react'
import './Contact.css'

const Contact=({Icon,Link})=>{
    return(
        <div className="contactrow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon/>}

            <a href=`Link`>{Link}</a>

        </div>
    )
}

export default Contact;