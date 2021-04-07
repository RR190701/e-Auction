import React from "react";
import Button from "@material-ui/core/Button";
import "./auctionCard.css";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import Paper from "@material-ui/core/Paper";

const AuctionCard = ({title, organisation, info, date, time}) => {
  return (
    <Paper elevation={3} className="auction-card">
      <div className="auction-card-content">
        <h1 className="auction-title">{title}</h1>
        <h1 className="auction-organisation">{organisation}</h1>
        <p className="auction-info">
        {info}
        </p>

        <div className="auction-card-footer">
          <div className="timings">
            <div className ="timing-date">
              <DateRangeTwoToneIcon color="secondary"></DateRangeTwoToneIcon>
              <span className="timing-content">{date}</span>
            </div>

            <div className="timing-time">
              <ScheduleTwoToneIcon color="secondary"></ScheduleTwoToneIcon>
              <span className="timing-content">{time}</span>
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
