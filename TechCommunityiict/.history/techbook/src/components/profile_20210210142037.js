import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'
import './profile.css'
import Contact from './Contact'


const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(
        // <div className="profilesection">
        //     <Profiletop/>
        //     </div>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="container bootstrap snippets bootdey">
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-4 col-sm-5">
                        <div class="thumbnail">
                            <img src="https://bootdey.com/img/Content/User_for_snippets.png" alt="Profile Picture">
                        </div> <!-- /.thumbnail -->
                        <br>
                        <div class="list-group">  
                            <a href="#" class="list-group-item">
                                <i class="fa fa-asterisk"></i> &nbsp;&nbsp;Activity Feed
                                <i class="fa fa-chevron-right list-group-chevron"></i>
                            </a> 
                            <a href="#" class="list-group-item">
                                <i class="fa fa-book"></i> &nbsp;&nbsp;Projects
                                <i class="fa fa-chevron-right list-group-chevron"></i>
                                <span class="badge">3</span>
                            </a> 
                            <a href="#" class="list-group-item">
                                <i class="fa fa-envelope"></i> &nbsp;&nbsp;Messages
                                <i class="fa fa-chevron-right list-group-chevron"></i>
                            </a> 
                            <a href="#" class="list-group-item">
                                <i class="fa fa-group"></i> &nbsp;&nbsp;Friends
                                <i class="fa fa-chevron-right list-group-chevron"></i>
                                <span class="badge">7</span>
                            </a> 
                            <a href="#" class="list-group-item">
                                <i class="fa fa-cog"></i> &nbsp;&nbsp;Settings
                                <i class="fa fa-chevron-right list-group-chevron"></i>
                            </a> 
                        </div> <!-- /.list-group -->
                    </div> <!-- /.col -->
        
        
                    <div class="col-md-8 col-sm-7">
                        <h2>Marktingk HGuoward</h2>
                        <h4>Visual, UI, UX Designer</h4>
                        <hr>
                        <p>
                            <a href="#" class="btn btn-success">Follow Marktingk</a>
                            &nbsp;&nbsp;
                            <a href="#" class="btn btn-info">Send Message</a>
                        </p>
                        <hr>
                        <ul class="icons-list">
                            <li><i class="icon-li fa fa-envelope"></i> rod@jumpstartui.com</li>
                            <li><i class="icon-li fa fa-globe"></i> jumstartthemes.com</li>
                            <li><i class="icon-li fa fa-map-marker"></i> Las Vegas, NV</li>
                        </ul>
                        <br>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                        <hr>
                    <div/>
                </div>
            </div>
        </div>                                                            
       

    )

}

export default Profile;