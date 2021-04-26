import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";
import { AiTwotonePhone } from "react-icons/ai";



const Dashboard = (props) => { 
    
    return (  
    <div className="dashboard">
   <div className ="personal-info">
        <h1 className="dasboard-heading">personal info</h1>
        <div className="personal-info-enitity">
       <div className="wedge">username :</div><div className="slant"> {props.username}</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> email : </div><div className="slant"> {props.email}</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> Age : </div ><div className="slant">{props.age}</div>
   </div>
   <div className="personal-info-enitity">
   <div className="wedge"> About :</div><div className="slant">{props.about}</div>
   </div>
   </div>
   <div className ="contact">
<div className="phone">
    <span><AiTwotonePhone fontSize="1.5rem" fill="#fa255e"/></span>
   <span style={{marginLeft: "0.5rem"}}>{props.number}</span> 
    
</div>
<div className="email">
    <span>< AiOutlineMail fill="#fa255e" fontSize="1.5rem"/></span>
    <span style={{marginLeft: "0.5rem"}}>{props.email}</span>
</div>
   </div>
   <div className="Address">
   <h1 className="dasboard-heading">{props.address}</h1>
   <div className="address-enitity">
       <div className="wedge">country :</div><div className="slant"> India</div>
   </div>
   <div className="address-enitity">
   <div className="wedge"> state : </div><div className="slant"> Uttar Pradesh</div>
   </div>
   <div className="address-enitity">
   <div className="wedge">address:</div><div className="slant">{props.address}</div>
   </div>
   <div className="address-enitity">
   <div className="wedge"> Zip :</div><div className="slant"> 220198</div>
   </div>

   </div>
        </div> );
}
 
export default Dashboard;