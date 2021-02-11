
import { Call, Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Profile from './components/profile'
import Sticky from 'react-stickynode'
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import Routes from './route'
import Curriculam from './components/Curriculam'
import Facultymembers from './components/Facultymembers'
import Resources from './components/Resources'


function App() {

  const [{user},dispatch]=useStateValue();
  return (
    <Router>
    <div className="App">
      {
        !user ? (
          <Login/>
        ) : (

          <>
      <Switch>
        //LOGIN PAGE
      <Route path = "/login"><Login/></Route>
      <Route path = "/Curriculam" ><Curriculam/></Route>
      <Route path = "/Faculty" > <Facultymembers/></Route>
      <Route path = '/profile'><Profile/></Route>
      <Route path = '/Resource'><Resources/></Route>
      <Route path = '/'> <Feed/></Route>

      </Switch> 
      </>
     
    )}    
    </div>
    </Router>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm