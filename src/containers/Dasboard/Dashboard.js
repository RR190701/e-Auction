import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";
import { AiTwotonePhone } from "react-icons/ai";



const Dashboard = () => {
    return (  
    <div className="dashboard">
   <div className ="personal-info">
        <h1 className="dasboard-heading">personal info</h1>
        <div className="personal-info-enitity">
       <div className="wedge">username :</div><div className="slant"> Rashika_19</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> Name : </div><div className="slant"> Rashika Rawat</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> Age : </div ><div className="slant">19</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> About :</div><div className="slant"> i am a software developer and curretly working on a project</div>
   </div>
   </div>
   <div className ="contact">
<div className="phone">
<<<<<<< HEAD
    <span><FiPhoneIncoming variant="primary"/></span>
   <span style={{marginLeft: "0.5rem"}}>8146515308</span> 
    
</div>
<div className="email">
    <span>< AiOutlineMail/></span>
    <span style={{marginLeft: "0.3rem"}}>  rashikarawat01@gmail.com</span>
=======
    <span><AiTwotonePhone fontSize="1.5rem" fill="#fa255e"/></span>
   <span style={{marginLeft: "1rem"}}>8146515308</span> 
    
</div>
<div className="email">
    <span>< AiOutlineMail fill="#fa255e" fontSize="1.5rem"/></span>
    <span style={{marginLeft: "1rem"}}>  rashikarawat01@gmail.com</span>
>>>>>>> 00a03ef1f7ec4c724d6253b567ba6b1dae449d8b
</div>
   </div>
   <div className="Address">
   <h1 className="dasboard-heading">Address</h1>
   <div className="address-enitity">
       <div className="wedge">country :</div><div className="slant"> India</div>
   </div>
   <div className="address-enitity">
   <div className="wedge"> state : </div><div className="slant"> Uttar Pradesh</div>
   </div>
   <div className="address-enitity">
   <div className="wedge"> full-address : </div><div className="slant">548/549V Vikram nagar Manak Nagar Lucknow</div>
   </div>
   <div className="address-enitity">
   <div className="wedge"> Zip :</div><div className="slant"> 220198</div>
   </div>

   </div>
        </div> );
}
 
export default Dashboard;