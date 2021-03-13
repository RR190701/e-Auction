import React ,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import "./style.css";
import AuctionCard from "../../containers/AuctionCard/auctionCard";

const UpcomingAuctions = () => {

  const [upcomingAuctions, setUpcomingAuctions] = useState([
    {
      title:"Beauty Banner",
      organisation: "Ratan Tata limited",
      info:"  An auction for Beautiful diamond earings and rings of original titan brand.",
      date:"18/03/2021",
      time:"4:45 PM"
    },
    {
      title:"Biker Beast",
      organisation: "Telsa time private limited",
      info:"An auction for super powerful and strong bikes that can run on different terrain.",
      date:"3/04/2021",
      time:"11:00 AM"
    },
    {
      title:"Hella Commet",
      organisation: "Surya Dev limited",
      info:"An auction for original handmade vase and flower pots.",
      date:"15/03/2021",
      time:"9:00 AM"
    },
    {
      title:"Bhakti Corner",
      organisation: "Prakaram Ashram",
      info:"  An auction for handmade gods and goddess scupltures made by students of our Ashram.",
      date:"20/03/2021",
      time:"1:30 PM"
    },
  ])

  return (
    <div className ="upcoming-auction-container">

      {
        upcomingAuctions.map( (auction) => (
          <AuctionCard
          title = {auction.title}
           organisation  = {auction.organisation}
           info = {auction.info}
           date = {auction.date}
           time = {auction.time}
  
          ></AuctionCard>
  ))
      }
     
        
    </div>
  );
};
export default UpcomingAuctions;
