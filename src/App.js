import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from './components/Topmenu/TopMenu';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/Login/LogIn';
import Profile from './containers/Profile/Profile';
import ForgetPassword from "./components/ForgetPassword/forgetPassword"
import ResetPassword from './components/ResetPassword/ResetPassword';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from "./components/privateScreen";
const App = () => {

 return(
   <React.Fragment>
     <Router>
       <PrivateRoute exact path="/" component={TopMenu}/>
       {/* <Route path ='/' exact component = {TopMenu}></Route> */}
       <Route path ='/log-in' exact component ={LogIn}></Route>
       <Route path ='/sign-up'component ={SignUp}></Route>
       <Route path="/profile/:username" component ={Profile}></Route>
       <Route path = "/ForgetPassword" component ={ForgetPassword}></Route>
       <Route path = "/passwordreset:resetToken" component ={ResetPassword}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
