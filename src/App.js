import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from './components/Topmenu/TopMenu';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/Login/LogIn';
import UpcomingAuctions from "./components/UpcomingAuctions";
import Profile from './containers/Profile/Profile';

const App = () => {

 return(
   <React.Fragment>
     <Router>
       <Route path ='/' exact component = {TopMenu}></Route>
       <Route path ='/log-in' exact component ={LogIn}></Route>
       <Route path ='/sign-up'component ={SignUp}></Route>
       <Route path ='/Upcoming'component ={UpcomingAuctions}></Route>
       <Route path="/profile/:username" component ={Profile}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
