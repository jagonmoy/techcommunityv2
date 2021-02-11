import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'

const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        <div className="profile_name_and_image">

            <Profiletop/>

        </div>
    )

}

export default Profile;