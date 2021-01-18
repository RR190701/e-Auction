import React from "react";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';

const App = () => {

 return(
   <React.Fragment>
     <TopMenu></TopMenu>
     <Router>
       <Route path ='/log-in' component ={LogIn}></Route>
     </Router>
   </React.Fragment>
 );

}

export default App;
