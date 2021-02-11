import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'

const profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        <div>

            <Profiletop/>

        </div>
    )

}