import React from "react";
import Button from "@material-ui/core/Button";
import "./auctionCard.css";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import Paper from "@material-ui/core/Paper";

const AuctionCard = () => {
  return (
    <Paper elevation={3} className="auction-card">
      <div className="auction-card-content">
        <h1 className="auction-title">Beauty Banner</h1>
        <h1 className="auction-organisation">Ratan Tata limited</h1>
        <p className="auction-info">
          An auction for Beautiful diamond earings and rings of original titan
          brand.
        </p>

        <div className="auction-card-footer">
          <div className="timings">
            <div>
              <DateRangeTwoToneIcon color="secondary"></DateRangeTwoToneIcon>
              <span className="timing-content">18/03/2021</span>
            </div>

            <div>
              <ScheduleTwoToneIcon color="secondary"></ScheduleTwoToneIcon>
              <span className="timing-content">4:45 PM</span>
            </div>
          </div>

          <Button
            variant="contained"
            className="Register-button"
            color="primary"
          >
            Register
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default AuctionCard;
