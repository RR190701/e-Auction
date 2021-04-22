import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Magnifier from "react-magnifier";
import { ImHammer2 } from "react-icons/im";


import "./style.css";
// import { useState } from 'react';

const AuctionDetails = ({match, history}) => {


  const [auctionName, setAuctionName] = useState("");
  const [discription, setDiscription] = useState("");
  const [minEstimation, setMinEstimation] = useState("");
  const [maxEstimation, setMaxEstimation] = useState("");
  const [auctioneer, setAuctioneer] = useState("");
  const [location, setLocation] = useState("");
  const [lot, setLot] = useState("");
  const [timings, setTimings] = useState("");
 // const [maxEstimation, setMaxEstimation] = useState("");

  useEffect(() => {

    if (!localStorage.getItem("authToken")) {
      history.push("/log-in");
    }

    const fetchAuctionDetails = async() => {

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      //fetching data
      try{

        const { data } = await axios.get(`/api/auction/biding/${match.params.auctionID}`, config);
        setAuctionName(data.auction.auctionName);
        setDiscription(data.auction.discription);
        setMinEstimation(data.auction.minEstimation);
        setMaxEstimation(data.auction.maxEstimation);
        setAuctioneer(data.auction.auctioneer);
        setLocation(data.auction.location);
        setTimings(data.auction.timings);
        setLot(data.auction.lot);
        console.log(data.auction);
}

      catch(error){
     console.log(error.response.data.error);
      }
    }

    fetchAuctionDetails();

  },[history]);


    return ( 
        <div className ="auction-detail-div">
        <Paper className ="auction-detail-paper" elavation ={3}>

          {/* auction details heading */}
          <div className="auction-details-heading-container">
          <ImHammer2
           fill="#fff" 
           fontSize="2.5rem"
           style ={{ padding:"5px", backgroundColor:"#fa255e", borderRadius:"5px" }}
           ></ImHammer2>
           <h3 className="auction-heading">
           {auctionName}
           </h3>

          </div>

        <div className ="auction-biding-portal">
           <div className ="product-image-portal">
           < Magnifier
           className ="product-image" 
             src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pastel-cut-flowers-in-a-glass-vase-royalty-free-image-912153130-1551483126.jpg"
             mgShape = "square"
             mgWidth={200}
             mgHeight={200}
             mgBorderWidth={0.5}
             >
               
           </Magnifier>
           </div>

           <div className ="biding-system">
<div className ="biding">

<div className="biding-in-auction">
<div className ="bid-form">
<label className="bid-label" htmlFor="bid">*Place your bid :</label>
<input id= "bid"
type ="number"
className="bid-input"
placeholder="Enter your max bid"></input>
<button className="bid-button">Place Bid</button>
<span className="bid-span">*You can bid at a minimum of {minEstimation}</span>
</div>
</div>
  <div className="biding-system-buttons-div">
    <button className="biding-system-buttons">Back to home</button>
    <button className="biding-system-buttons">View all Bids</button>
  </div>


</div>

           <div className = "auctioneer-details">
    <div className = "auctioneer-details-fir">Auctioneer:</div>
    <div className = "auctioneer-details-sec">{auctioneer}</div>
    <div className = "auctioneer-details-fir">Lot:</div>
    <div className = "auctioneer-details-sec">{lot}</div>
    <div className = "auctioneer-details-fir">estimation:</div>
    <div className = "auctioneer-details-sec">{minEstimation} - {maxEstimation}</div>
    <div className = "auctioneer-details-fir">Location:</div>
    <div className = "auctioneer-details-sec">{location}</div>
    <div className = "auctioneer-details-fir">Timings:</div>
    <div className = "auctioneer-details-sec">{timings}</div>
 
  </div>

           </div>


        </div>
        <div className="discription-box">
        <h2 className ="catalogue">Catalogue</h2> 
        <p className="discription">
         {discription}
        </p>
        </div>

        </Paper>
    
            </div>
    )

}
 
export default AuctionDetails;