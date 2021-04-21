import React from 'react';
import Paper from "@material-ui/core/Paper";
import Magnifier from "react-magnifier";
import { ImHammer2 } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";


import "./style.css";

const AuctionDetails = () => {
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
           Hella Commet
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
<span className="bid-span">*You can bid at a minimum of 10,000</span>
</div>
</div>
  <div className="biding-system-buttons-div">
    <button className="biding-system-buttons">Back to home</button>
    <button className="biding-system-buttons">View all Bids</button>
  </div>


</div>

           <div className = "auctioneer-details">
    <div className = "auctioneer-details-fir">Auctioneer:</div>
    <div className = "auctioneer-details-sec">Ratan Tata</div>
    <div className = "auctioneer-details-fir">Lot:</div>
    <div className = "auctioneer-details-sec">2</div>
    <div className = "auctioneer-details-fir">estimation:</div>
    <div className = "auctioneer-details-sec">10,000$ - 15,000$</div>
    <div className = "auctioneer-details-fir">Location:</div>
    <div className = "auctioneer-details-sec">Bilampur, Mumbai</div>
    <div className = "auctioneer-details-fir">Timings:</div>
    <div className = "auctioneer-details-sec">23-07-2020, 10:30 AM</div>
 
  </div>

           </div>


        </div>
        <div className="discription-box">
        <h2 className ="catalogue">Catalogue</h2> 
        <p className="discription">
          A glass vase for sale, glass is not cracked and well polished , milton company brand no 1028948.
        </p>
        </div>

        </Paper>
    
            </div>
    )

}
 
export default AuctionDetails;