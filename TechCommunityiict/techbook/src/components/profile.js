import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'
import './profile.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Contact from './Contact'



const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        <div className="app_body">
         <Header/>  
         <div id="sidebarclass"><Sidebar/></div>
        <div className="profileclass">
        <div className="profilecontainer">
          <div className="profilesection">
             <Profiletop/>
         </div>
         </div>    
        </div>  
       </div>
        
       

    )

}

export default Profile;