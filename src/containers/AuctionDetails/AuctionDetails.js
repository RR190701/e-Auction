import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Magnifier from "react-magnifier";
import { ImHammer2 } from "react-icons/im";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./style.css";
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import AllBids from './../AllBids/allBids';

const AuctionDetails = ({match, history}) => {

  const [auctionID, setAuctionID] = useState("");
  const [auctionName, setAuctionName] = useState("");
  const [discription, setDiscription] = useState("");
  const [minEstimation, setMinEstimation] = useState("");
  const [maxEstimation, setMaxEstimation] = useState("");
  const [auctioneer, setAuctioneer] = useState("");
  const [location, setLocation] = useState("");
  const [lot, setLot] = useState("");
  const [timings, setTimings] = useState("");
  const [bid, setBid] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [isEnded, setIsEnded] = useState(false);
  const [auctionDay,setAuctionDay] =useState("")
  const [auctionMonth,setAuctionMonth] =useState("")
  const [auctionYear,setAuctionYear] =useState("")
  const [auctionHour,setAuctionHour] =useState("")
  const [auctionMin,setAuctionMin] =useState("")
  const [dayLeft, setDayLeft] = useState(0);
  const [hourLeft, setHourLeft] = useState(0);
  const [minLeft, setMinLeft] = useState(0);
  const [secLeft, setSecLeft] = useState(0);
  const [totalBids, setTotalBids] = useState(0);

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
        setAuctionID(data.auction.auctionID);
        setTotalBids(data.auction.allBids.length);
        setUsername(localStorage.getItem("username"));
        console.log(auctionID);

        const date = new Date(data.auction.timings);
        if(date-Date.now()<0)setIsEnded(true);

        setAuctionYear(date.getFullYear());
        setAuctionMonth(date.getMonth()+1);
        setAuctionDay(date.getDate());
        setAuctionHour(date.getHours());
        setAuctionMin(date.getMinutes());
        console.log(date);
}

      catch(error){
     console.log(error.response.data.error);
      }
    }


    fetchAuctionDetails();

  },[history]);


  useEffect(() => {
    //check if auction ended 
    if(isEnded)return;

    const interval = setInterval(() => {

      // if(!timings)return;

      const date = new Date(timings);
      const timeleft = date-Date.now()
      if(timeleft<0){setIsEnded(true)

    };
      setDayLeft(Math.floor(timeleft/1000/60/60/24))
      setHourLeft(Math.floor(timeleft/1000/60/60)%24)
      setMinLeft(Math.floor(timeleft/1000/60)%60)
      setSecLeft(Math.floor(timeleft/1000)%60)
    }, 1000);
    return () => clearInterval(interval);
  }, [timings,isEnded]);


  //bid handler
  const bidHandler = (e) =>{
setBid(e.target.value);


  }



const placeBidHandler = async() =>{

  
if(isNaN(bid)){
  setError("*please enter a valid bid value");
  return;
}
else if(bid<minEstimation){
  setError(`*you can bid minimun of ${minEstimation}`);
  return;
}
else {
  setError("");
  
}

//dummy usernsme

const config = {

  headers: {
    "Content-Type": "application/json",
  },
};

//sending bid
try {
  const { data } = await axios.post(
    `/api/auction/registerBid/${auctionID}`,
    { username, bid },
    config
  );
 
  console.log(data.data);
  toast.success(data.data, {
    className :"error-toast",
    position:toast.POSITION.TOP_CENTER
  });


  
} catch (error) {

  console.log(error.response.data.error);
      toast.error(error.response.data.error, {
      className :"error-toast",
      position:toast.POSITION.TOP_CENTER
    });

  // setTimeout(() => {
  //   setErrors("");
  // }, 5000);
}


  setBid("");


};



    return ( 
        <div className ="auction-detail-div">
        <Paper className ="auction-detail-paper" elavation ={3}>

        <>
      
      <ToastContainer
      draggable ={false}
      autoClose={3000}
      ></ToastContainer>

      </>

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
             <div style={{display:"flex"}} >
               <div className="time-left">
                 Time left:
               </div>
               <div style={{fontWeight:"600"}}>
                 {`${(dayLeft<0)?0:dayLeft}d:${(hourLeft<0)?0:hourLeft}h:${(minLeft<0)?0:minLeft}m:${(secLeft<0)?0:secLeft}s`}
               </div>
             </div>

       {
         isEnded?(
<div className="result">
Auction Ended!!
</div>
         ):(
<div className ="biding">

<div className="biding-in-auction">
<div className ="bid-form">
<label className="bid-label" htmlFor="bid">*Place your bid :</label>
<input id= "bid"
type ="number"
value = {bid}
onChange = {bidHandler}
className="bid-input"
placeholder="Enter your max bid"></input>
<button onClick={placeBidHandler} className="bid-button">Place Bid</button>
{error && <span className ="biding-price-error">{error}</span>}
<span className="total-bids-span">[<span className="total-bids">{totalBids}</span>]bids</span>
<span className="bid-span">~You can bid at a minimum of {minEstimation}</span>
</div>
</div>
  <div className="biding-system-buttons-div">
    <Link to ="/" className="biding-system-buttons">Back to home</Link>
    <Link to={`/allBids/${auctionID}`} className="biding-system-buttons">View all Bids</Link>
  </div>
</div>
         )
       }      

           <div className = "auctioneer-details">
    <div className = "auctioneer-details-fir">Auctioneer:</div>
    <div className = "auctioneer-details-sec">{auctioneer}</div>
    <div className = "auctioneer-details-fir">Lot:</div>
    <div className = "auctioneer-details-sec">{lot}</div>
    <div className = "auctioneer-details-fir">estimation:</div>
    <div className = "auctioneer-details-sec">{minEstimation} - {maxEstimation}</div>
    <div className = "auctioneer-details-fir">Location:</div>
    <div className = "auctioneer-details-sec">{location}</div>
    {
      isEnded?(
        <div className = "auctioneer-details-fir">Ended on:</div>
      ):(
        <div className = "auctioneer-details-fir">Ending on:</div>
      )
    }
    
    <div className = "auctioneer-details-sec">{`${auctionDay}/${auctionMonth}/${auctionYear}  ${auctionHour}:${auctionMin}`}</div>
 
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