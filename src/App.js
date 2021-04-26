import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from './components/Topmenu/TopMenu';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/Login/LogIn';
import Profile from './containers/Profile/Profile';
import ForgetPassword from "./components/ForgetPassword/forgetPassword"
import ResetPassword from './components/ResetPassword/ResetPassword';
import PrivateRoute from './components/routing/PrivateRoute';
//import PrivateScreen from "./components/privateScreen";
import Navbar from "./components/Navbar/Navbar"
import AuctionDetails from './containers/AuctionDetails/AuctionDetails';
import AllBids from './containers/AllBids/allBids';
const App = () => {

 return(
   <React.Fragment>
   
     <Router>
     <Navbar></Navbar>
       <PrivateRoute exact path="/profile/:username" component={Profile}/>
       <Route exact path ='/' exact component = {TopMenu}></Route>
       <Route  exact path ='/log-in' exact component ={LogIn}></Route>
       <Route   exact path ='/sign-up'component ={SignUp}></Route>
       <Route path = "/ForgetPassword" component ={ForgetPassword}></Route>
       <Route path = "/passwordreset/:resetToken" component ={ResetPassword}></Route>
       <Route path ="/auction/:auctionID" component ={AuctionDetails}></Route>
       <Route path="/allBids/:auctionID" component ={AllBids}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
