import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import "./style.css";

const SideBar = (props) => {
    return (    <div className="Profile-side-bar">
          <img alt = "profile picture" className= "profile-pic" src= {"https://tse4.mm.bing.net/th?id=OIP.RBwKn7ERfz_ieSbdE8pUBAHaE0&pid=Api&P=0&w=246&h=1611"}></img>
          <h1 className ="Profile-name">{props.username}</h1>
          <div className = "Profile-profession">{props.profession}</div>
    </div> );
}
 
export default SideBar;