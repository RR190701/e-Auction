import React ,{useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import "./style.css";
import AuctionCard from "../../containers/AuctionCard/auctionCard";
import axios from 'axios';
import "swiper/components/navigation/navigation.min.css"

import { Swiper, SwiperSlide } from  "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
const ActiveAuctions = ({history}) => {
  
  // const [error, setError] = useState("");
  // const [auctionName, setAuctionName] = useState("");
  const [Data, setData] = useState([]);
  // const [auctioneer, setAuctioneer] = useState("");
  // const [discription, setDiscription] = useState("");
  // const [timings, setTimings] = useState("");
  // const [minEstimation, setminEstimation] = useState("");
  // const [lot, setLot] = useState("");

  
  useEffect(() => {
  const fetchData = async () => {

    
    

    try {

 
      const { data } = await axios.get('https://lit-peak-91776.herokuapp.com/api/auction/activeAuctions');
      // console.log(localStorage.getItem("email"))
      setData(data)
    
    } catch (error) {
      console.log(error.response.data.error);
      
      // setError("");
    }
  };
  fetchData();
},[history]);

 
 console.log(Data)

  return (
    
    <div className ="upcoming-auction-container">
 
      {
         <Swiper 
         pagination={{
          "clickable": true
        }}
        cssMode={true} navigation={true}
        className="mySwiper"
        
         slidesPerView={2} spaceBetween={30}
        >

         {Data.activeAuctions?.map((auction, i) => (
             <SwiperSlide key={i}>
                 {/* <figure className={"fig fig_"+i}> */}
                         <AuctionCard className="auctionCard"
          
                  title = {auction.auctionName}
                   organisation  = {auction.auctioneer}
                   info = {auction.discription}
                   date = {auction.timings}
                   time = {auction.timings}
                  lot = {auction.lot}
                   price = {auction.minEstimation}
                   location={auction.location}
                   auctionID={auction.auctionID}
          
                  ></AuctionCard>
                 {/* </figure> */}
             </SwiperSlide>
         ))}

     </Swiper>
  //       Data.activeAuctions?.map( (auction) => (
  //         <AuctionCard
          
  //         title = {auction.auctionName}
  //          organisation  = {auction.auctioneer}
  //          info = {auction.discription}
  //          date = {auction.timings}
  //          time = {auction.timings}
  //         lot = {auction.lot}
  //          price = {auction.minEstimation}
  //          location={auction.location}
  //          auctionID={auction.auctionID}
  
  //         ></AuctionCard>
        
  // ))
      }
     
   
    </div>
  );
};
export default ActiveAuctions;
