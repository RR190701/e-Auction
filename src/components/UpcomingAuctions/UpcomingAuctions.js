import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import "./style.css";
import AuctionCard from "../../containers/AuctionCard/auctionCard";

const UpcomingAuctions = () => {
  return (
    <div className ="upcoming-auction-container">
        <AuctionCard></AuctionCard>
        
        <AuctionCard></AuctionCard>
        <AuctionCard></AuctionCard>
        <AuctionCard></AuctionCard>
        <AuctionCard></AuctionCard>
        <AuctionCard></AuctionCard>
    </div>
  );
};
export default UpcomingAuctions;
