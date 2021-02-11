import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'

const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        <div className="profilesection">

            <div>

            </div>

            

        </div>
    )

}

export default Profile;