import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import "./Profile.css";
import {data} from "./../data/Profiles.json"; 


const Profile = (props) => {

    let disabled = true;

    const [Profile, setProfile] = useState({
        ProfileID: "",
        firstName : "",
        lastName : "",
        email: "",
        phone: "",
        age: "",
        country: "",
        Address : "",
        zip:"",
        state:""

    })
    const [Profile_ID, setProfile_ID]= useState("");

    
    useEffect(()=>{
        console.log(props);
        const id = props.match.params.ProfileId;
        console.log(props.match.params);
        const profile = data.find(profile => profile.ProfileId == id);
  

        setProfile(profile);
        setProfile_ID(id);
    },[props.match.params.ProfileId, Profile])
 
    const HandleSubmit = (e) =>{
    e.preventDefault();

    //call the server
    console.log("submitted");
  }
  
//   if(!Profile) {
//       console.log("not available");
//       return null};

    return ( <Paper className="profile-page" elevation={3}>
          
    <h1 className="text-center pb-5 profile-in-heading">Profile</h1>
    <form  className="row g-3">
  <div className="col-md-6 ">
    <label htmlFor="inputFirstName"  className="form-label labels">First Name :</label>
    <input type="text"  disabled={disabled} className="form-control " id="inputFirstName"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputLastName" className="form-label labels">Last Name :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputLastName"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="Contact" className="form-label labels">Contact Number :</label>
    <input type="text" disabled={disabled} className="form-control" id="Contact"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label labels">Email ID :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-9">
    <label htmlFor="inputAddress" className="form-label labels">Full Address :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputAge" className="form-label labels">Age :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputAge"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label labels">City :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputCity"></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState"  className="form-label labels">State :</label>
    <select id="inputState" disabled={disabled} className="form-select">
      <option selected>Choose...</option>
      <option>Uttar Pradesh</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label labels">Zip :</label>
    <input type="text" disabled={disabled} className="form-control" id="inputZip"></input>
  </div>
  
  <div className="col-12 ">
    <button type="submit" className="profile-button">Edit</button>
    <button type="submit" className="profile-button">Save Changes</button>
  </div>
</form>

</Paper> );
}
 
export default Profile;