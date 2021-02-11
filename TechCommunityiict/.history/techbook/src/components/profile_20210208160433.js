import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'

const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        <div>

            <Profiletop/>

        </div>
    )

}

export default Profiletop;