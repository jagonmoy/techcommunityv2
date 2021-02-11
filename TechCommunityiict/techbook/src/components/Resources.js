import React, { useState, useEffect } from "react";
import './Resources.css' ;
import Axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar"
import { KeyboardHideOutlined } from "@material-ui/icons";
import link from "react-router-dom"
 
 
function Resource () {
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

        <div className="resources">
             

 
            <table id="customers" className="tableres">
                <tr>
                    <th>Title</th>
                    <th>Link</th>
                </tr>
            </table>
            {resources.map((product) => (
            <div className="tabledata">
                {/* <div className="tableentry">
                <div className="tablerow">
                    <h4>{product.title}</h4>
                </div>
 
                <div className="tablerow">
                    <h4>{product.link}</h4>
                </div>
                </div> */}
 
                <table id="customers" className="tableres">
                    <tr>
                        <td>{product.title}</td>
                        <td><a href={product.link}>Click here</a></td>
                    </tr>
                </table>
            </div>
 
            ))}
 
         </div>
         </div>
  );
}
 
export default Resource