import React ,{useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import "./style.css";
import AuctionCard from "../../containers/AuctionCard/auctionCard";
import axios from 'axios';

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

 
      const { data } = await axios.get('api/auction/activeAuctions');
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
        Data.activeAuctions?.map( (auction) => (
          <AuctionCard
          
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
        
  ))
      }
     
   
    </div>
  );
};
export default ActiveAuctions;
