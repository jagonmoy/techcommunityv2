import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar"
import { KeyboardHideOutlined } from "@material-ui/icons";


function ResourceCopy () {
    const [resources, setresources] = useState([]);

  const fetchresources = async () => {
    const { data } = await Axios.get(
        "https://6024809b36244d001797acd4.mockapi.io/resource"
    );
    const resources = data;
    setresources(resources);
    console.log(resources);
  };

  useEffect(() => {
    fetchresources();
  }, []);
   
    return (
        <div className="app_body">
          <Header/>  
          <div id="sidebarclass"><Sidebar/></div>
            <div className="curriculam">
            <div className="yr1sms1">
             <h4 id='title'>Year:1 Semester:1</h4>
             <table id='students'>
               <tbody>
                  <tr>

                  </tr>
  
               </tbody>
            </table>
          </div>
         </div>
       </div>
  );
}

export default ResourceCopy
