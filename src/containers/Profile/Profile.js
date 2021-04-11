import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Profile.css";
import SideBar from "./../Profile-sidebar/Sidebar";
import ProfileBar from "./../Profile-center/ProfileBar";

const Profile = ({ history }) => {
  const [error, setError] = useState("");
  const [username, setusername] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [email, setemail] = useState("");
  const [profession, setprofession] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [number, setnumber] = useState("");

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
<<<<<<< HEAD

                 const { data } = await axios.get("/api/private/", config);
=======
        // console.log(localStorage.getItem("email"))
        const { data } = await axios.get(`/api/private/profile/${localStorage.getItem("email")}`, config);
        // console.log(localStorage.getItem("email"))
>>>>>>> d5235e4c117739145de3f4189b1e12d677f382bc
        setPrivateData(data.data);
        setusername(data.user.username)
        setemail(data.user.email)
        setprofession(data.user.profession)
        setaddress(data.user.address)
        setnumber(data.user.number)
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        setError("not authorized");
      }
    };
    fetchPrivateData();
  }, [history]);


  return (
    <div class="Profile-div">
      <div class="side-bar">
        <SideBar username={username} profession={profession}></SideBar>
      </div>
      <div class="profile-bar">
        <ProfileBar username={username} email={email}/>

          <div style={{ backgroundColor: "green" }}>{privateData}</div>
      
      </div>
    </div>
  );
};

export default Profile;
