import React from "react";
import TopMenu from "./components/TopMenu";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LogIn from './components/LogIn';

const App = () => {

 return(
   <React.Fragment>
      <TopMenu/>
     <Router>
     <Route path = "/Log-in" exact component = {LogIn}/>
     </Router>
   </React.Fragment>
 );

}

export default App;
