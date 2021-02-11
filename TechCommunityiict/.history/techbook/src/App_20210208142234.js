
import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Sticky from 'react-stickynode'
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';
import {Router} from 'react-router-dom'
import Route from 


function App() {

  const [{user},dispatch]=useStateValue();

  
  return (
    <div className="App">
      {
        !user ? (
          <Login/>
        ) : (

          <>

      <Header/>
      <div className="app_body">
      <div id="sidebarclass"><Sidebar/></div>
      <div id="feedid"><Feed/></div>
      
      </div>
      </>

    )}    
    </div>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm