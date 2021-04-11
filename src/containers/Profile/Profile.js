import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Profile.css";
import SideBar from "./../Profile-sidebar/Sidebar";
import ProfileBar from "./../Profile-center/ProfileBar";

const Profile = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/log-in");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      
      

      try {

                 const { data } = await axios.get("/api/private/", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("not authorized");
      }
    };
    fetchPrivateData();
  }, [history]);

  return (
    <div class="Profile-div">
      <div class="side-bar">
        <SideBar></SideBar>
      </div>
      <div class="profile-bar">
        <ProfileBar></ProfileBar>
   
          <div style={{ backgroundColor: "green" }}>{privateData}</div>
      
      </div>
    </div>
  );
};

export default Profile;
