import React from 'react'
import './Contact.css'

const Contact=({Icon,Link})=>{
    return(
        <div >
            {Icon && <Icon/>}
            <a>{Link}</a>

        </div>
    )
}