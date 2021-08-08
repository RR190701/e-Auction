import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Profile.css";
import SideBar from "./../Profile-sidebar/Sidebar";
import ProfileBar from "./../Profile-center/ProfileBar";

const Profile = ({ history, match }) => {
  const [error, setError] = useState("");
  const [username, setusername] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [email, setemail] = useState("");
  const [profession, setprofession] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [about, setabout] = useState("");
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

        //  const { data } = await axios.get("/api/private/", config);
        // console.log(localStorage.getItem("email"))
        const { data } = await axios.get(`https://lit-peak-91776.herokuapp.com/api/private/profile/${match.params.username}`, config);
        console.log(data);
        setPrivateData(data.data);
        setusername(data.user.username)
        setemail(data.user.email)
        setprofession(data.user.profession)
        setaddress(data.user.address)
        setnumber(data.user.number)
        setage(data.user.age)
        setabout(data.user.about)
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("username");
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
        <ProfileBar username={username} email={email} age={age} number={number} about={about} address={address} />

          <div style={{ backgroundColor: "green" }}>{privateData}</div>
      
      </div>
    </div>
  );
};

export default Profile;
