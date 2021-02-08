import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import TopMenu from './components/TopMenu';
import Profile from './containers/Profile';

const App = () => {

 return(
   <React.Fragment>
     <Router>
       <Route path ='/log-in' exact component ={LogIn}></Route>
       <Route path ='/Profile' component = {Profile}></Route>
       <Route path ='/Topmenu' component = {TopMenu}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
