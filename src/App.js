import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from './components/Topmenu/TopMenu';
import Profile from './containers/Profile';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/Login/LogIn';
import UpcomingAuctions from "./components/UpcomingAuctions";

const App = () => {

 return(
   <React.Fragment>
     <Router>
       <Route path ='/' exact component = {TopMenu}></Route>
       <Route path ='/log-in' exact component ={LogIn}></Route>
       <Route path ='/sign-up'component ={SignUp}></Route>
       <Route path = '/Profile/:ProfileID'component = {Profile}></Route>
       <Route path ='/Upcoming'component ={UpcomingAuctions}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
