import React from 'react'
import {Avatar} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import './SidebarRow.css'

const SidebarRow=({Icon,title})=>{

    return(
        <div className="sidebarRow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon/>}

            <p>{title}</p>

        </div>
    )
}

export default SidebarRow;