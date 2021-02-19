import React from 'react';
import "./style.css";

const SideBar = () => {
    return (    <div className="Profile-side-bar">
          <img alt = "profile picture" className= "profile-pic" src= {"https://tse4.mm.bing.net/th?id=OIP.RBwKn7ERfz_ieSbdE8pUBAHaE0&pid=Api&P=0&w=246&h=1611"}></img>
          <h1 className ="Profile-name">Rashika Rawat</h1>
          <div className = "Profile-profession">Front-end developer</div>
    </div> );
}
 
export default SideBar;