import React from "react";
import Button from "@material-ui/core/Button";
import "./auctionCard.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import Tooltip from "@material-ui/core/Tooltip";
import { BiRupee } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GiRecycle } from "react-icons/gi";
import { RiAuctionLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { BorderLeft } from "@material-ui/icons";
import { Popover } from "bootstrap";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    
  },
  tooltip: {
    maxWidth: '200px',
},
tooltipPlacementTop: {
    margin: '4px 0',
},
tooltipPlacementBottom: {
    margin: '4px 0',
},
  
}));
const AuctionCard = ({
  title,
  organisation,
  info,
  date,
  time,
  price,
  lot,
  location,
  auctionID
}) => {
  const popError = (errorMessage) => {

    toast.error(errorMessage, {
      className :"error-toast",
      position:toast.POSITION.TOP_RIGHT
    });
  }
 const handleBid = (e) => {
  if(localStorage.getItem("authToken")){
e.preventDefault()
console.log("Yes you are logged in")
  } else {popError("Please Log In First")}
 }
  const classes = useStyles();
  return (
    <Paper elevation={3} className="auction-card">
            <>
      
      <ToastContainer
      draggable ={false}
      autoClose={3000}
      ></ToastContainer>

      </>
      <div className="auction-card-content">
        <div>
          <div>
            {" "}
            <h1 className="auction-title">{title} </h1>
          </div>
        </div>
        <h1 className="auction-organisation">
          - {organisation}, {location}
        </h1>
        
        {/* timings date and time of auction         */}
        <div className="timings">
          <div className="timing-date">
            <DateRangeTwoToneIcon color="secondary"></DateRangeTwoToneIcon>
            <span className="timing-content">{date}</span>
          </div>

          <div className="timing-time" style={{marginLeft:"1rem"}}>
            <ScheduleTwoToneIcon color="secondary"></ScheduleTwoToneIcon>
            <span className="timing-content">{time}</span>
          </div>
        </div>


        {/* auction information lot, condition, min estimation */}
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            justifyContent: "space-evenly",
            marginTop: "2.3rem",
            width: "100%",
          }}
        >

          {/* lot */}

            <Paper
              className="auc-count-card"
              elevation={3}
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                className="auc-info-icon"
                style={{ backgroundColor: "#ff004f",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px" ,height:"100%", paddingTop:"0.4rem", paddingRight:"0.4rem", paddingLeft:"0.4rem" 
             }}
              >
                <AiFillTag size="1.8rem" color="white" />
              </div>
              <div
                className="auc-info-text-container"
                style={{ height:"100%",padding:"0.1rem 1rem 0.1rem 0.5rem" }}
              >
                <div
                  className="counter-value"
             
                >
                  Lot:
                </div>
                <div className="counter-number" >
                  {lot}
                </div>
              </div>
            </Paper>

          {/* condition */}

            <Paper
              className="auc-count-card"
              elevation={3}
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                className="auc-info-icon"
                style={{ backgroundColor: "#ff004f",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px", height:"100%", paddingTop:"0.4rem", paddingRight:"0.4rem", paddingLeft:"0.4rem"
}}
              >
                  <GiRecycle size="1.8rem" color="white" />
              </div>
              <div className="auc-info-text-container"
              
              style={{ height:"100%",
              padding:"0.1rem 1rem 0.1rem 0.5rem"}}>
                <div
                  className="counter-value"
            
                >
                  Condition:
                </div>
                <div
                  className="counter-number"
                >
                  Repairable
                </div>
              </div>
            </Paper>

          {/* low estimation */}

            <Paper
              className="auc-count-card"
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                className="auc-info-icon"
                style={{ backgroundColor: "#ff004f",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px", height:"100%", paddingTop:"0.4rem", paddingRight:"0.4rem", paddingLeft:"0.4rem" }}
                >
                  <BiRupee size="1.8rem" color="#fff" />
              </div>

              <div className="auc-info-text-container"
                style={{ height:"100%", padding:"0.1rem 1rem 0.1rem 0.5rem"}}>
                <div
                  className="counter-value"
            
                >
                  Minimum Bid:
                </div>
                <div className="counter-number" >
                  {price}
                </div>
              </div>
            </Paper>
          </div>

        {/* discription of auction */}
        <p className="auction-info">{info}</p>

        <div className="auction-card-footer" style={{justifyContent:"flex-end"}}>
          <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
              <Tooltip title="Set a Reminder" arrow>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ padding: "0.3rem", marginRight: "2.5rem" }}
                  aria-label="add an alarm"
                >
                  <AlarmIcon size="1.3rem"/>
                </Button>
              </Tooltip>
            </div>
            <div style={{display:"flex"}}>
            <Tooltip title="Bid" classes={classes} arrow>
            <Button
              variant="contained"
              className="Register-button"
              color="primary"
              onClick={handleBid}
            ><Link style={{color:"white"}} to = {`/auction/${auctionID}`}>
                       <RiAuctionLine size="1.3rem" />
            </Link>
            </Button>
          </Tooltip>
            </div>
          </div>
          
        </div>
      </div>
    </Paper>
  );
};

export default AuctionCard;
