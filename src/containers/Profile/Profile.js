import React from 'react';
import "./Profile.css";
import SideBar from './../Profile-sidebar/Sidebar';
import ProfileBar from './../Profile-center/ProfileBar'


const Profile = () => {
    return (<div class="Profile-div">
      <div class="side-bar" >
     <SideBar></SideBar>
      </div>
      <div class="profile-bar" >
          <ProfileBar></ProfileBar>  
     </div>
  </div>  );
}
 
export default Profile;