import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import SuperVisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core'


const header = () => {

    const [{user},dis]
    return (
        <div className='header'>
            <div className="header_left">


            
            <img src="https://i.imgur.com/pwjXrhD.png alt=iict logo"/>
            </div>

            <div className="header_input">
                <SearchIcon/>
                <input placeholder='Search Techbook' type="text">
                </input>
            </div>

            <div className="header_center">

                <div className="header_option header_option--active">
                    <HomeIcon fontSize='large'/>
                    <h4>Home</h4>
                </div>

                <div className="header_option">
                    <FlagIcon fontSize='large'/>
                    <h4>Papers</h4>
                </div>

                <div className="header_option">
                    <BurstModeIcon fontSize='large'/>
                    <h4>Resources</h4>
                </div>

                <div className="header_option">
                    <SuperVisedUserCircleIcon fontSize='large'/>
                    <h4>Faculty</h4>
                </div>

            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar/>
                    <h4>Avishak Chakroborty</h4>
                </div>

                <IconButton>
                <AddIcon/>
                </IconButton>

                
                <IconButton>
                <ForumIcon/>
                </IconButton>
                
                <IconButton>
                <ExpandMoreIcon/>
                </IconButton>
                


            </div>

        </div>
    )
}

export default header
