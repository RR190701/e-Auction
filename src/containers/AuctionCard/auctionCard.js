import React from "react";
import Button from "@material-ui/core/Button";
import "./auctionCard.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import Tooltip from '@material-ui/core/Tooltip';
import { BiRupee } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { GiRecycle } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
}));
const AuctionCard = ({title, organisation, info, date, time, price, lot}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className="auction-card">
      
      <div className="auction-card-content">
        <div>
          
   
        <div style={{display: 'flex', flexWrap: 'wrap' }}>
          <div>  <h1 className="auction-title">{title} </h1></div>
          <div >  
            
          <div className="timings">
            <div style={{marginLeft: '5rem'}} className ="timing-date">
              <DateRangeTwoToneIcon color="secondary"></DateRangeTwoToneIcon>
              <span className="timing-content">{date}</span>
            </div>

            <div className="timing-time">
              <ScheduleTwoToneIcon color="secondary"></ScheduleTwoToneIcon>
              <span className="timing-content">{time}</span>
            </div>
         
          </div>
          </div>
        
        </div>
        <h1 className="auction-organisation">{organisation}</h1>
        </div>
        {/* <section className="container-fluid mb-4"> */}
        <div className="row" style={{display: 'flex',  flexWrap: 'wrap', boxSizing: "border-box"}}>
        <a className="col-md-2 pl-2 pr-2"  style={{boxSizing: 'content-box', paddingRight: '3rem'}}>
            <div className="auc-count-card" style={{display: 'flex',flexDirection: "row",paddingLeft: '3rem',paddingRight: '3rem',justifyContent: 'center',alignItems: 'center',backgroundColor: "#fa255e", boxShadow: '0 20px 20px rgba(39, 39, 39, 0.19), 0 6px 6px rgba(53, 52, 52, 0.23)', border: '2px solid #fa255e'}}>
              <div className="auc-info-icon" style={{display: 'flex', justifyContent: 'center', borderRight: '2px solid white',marginRight: '1.3rem',backgroundColor: '#ff033e' }}>
<span style={{display: 'inline-block', position: 'relative' }}>
  <AiFillTag size='1.5rem' color='white'/>

</span>
              </div>
              <div className="auc-info-text-container">
                <div className="counter-value" style={{fontSize: '0.8rem', fontFamily: 'cursive', color:'white'}}>LOT</div>
                <div className="counter-number" style={{color: 'white'}}>{lot}</div>
              </div>
            </div>
          </a>
          <a className="col-md-2 pl-2 pr-2"  style={{boxSizing: 'content-box', paddingRight: '5rem'}}>
            <div className="auc-count-card" style={{display: 'flex',flexDirection: "row",paddingLeft: '4rem',paddingRight: '4rem',justifyContent: 'center',alignItems: 'center',backgroundColor: "#fa255e", boxShadow: '0 20px 20px rgba(39, 39, 39, 0.19), 0 6px 6px rgba(53, 52, 52, 0.23)', border: '2px solid #fa255e'}}>
              <div className="auc-info-icon" style={{display: 'flex', justifyContent: 'center',borderRight: '2px solid white' ,marginRight: '0.8rem',backgroundColor: '#ff033e' }}>
<span style={{display: 'inline-block', position: 'relative' }}>
  <GiRecycle size='1.5rem' color='white'/>

</span>
              </div>
              <div className="auc-info-text-container">
                <div className="counter-value" style={{fontSize: '0.8rem',fontFamily: 'cursive', color: 'white'}}>Condition</div>
                <div className="counter-number" style={{color: '#ff033e', color: 'white'}}>Repairable</div>
              </div>
            </div>
          </a>
          <a className="col-md-2 pl-2 pr-2"  style={{boxSizing: 'content-box'}}>
            <div className="auc-count-card" style={{display: 'flex',flexDirection: "row",paddingLeft: '3rem',paddingRight: '3rem',justifyContent: 'center',alignItems: 'center',backgroundColor: "#fa255e", boxShadow: '0 20px 20px rgba(39, 39, 39, 0.19), 0 6px 6px rgba(53, 52, 52, 0.23)', border: '2px solid #fa255e'}}>
              <div className="auc-info-icon" style={{display: 'flex', justifyContent: 'center', borderRight: '2px solid white',marginRight: '1rem',backgroundColor: '#ff033e' }}>
<span style={{display: 'inline-block', position: 'relative' }}>
  <BiRupee size='1.5rem' color='white'/>

</span>
              </div>
              <div className="auc-info-text-container" >
                <div className="counter-value" style={{fontSize: '0.8rem',fontFamily: 'cursive',color: 'white'}}>Starting Price</div>
                <div className="counter-number" style={{color: 'white'}}>{price}</div>
              </div>
            </div>
          </a>
          
          </div>
     
        <p className="auction-info">
        {info}
        </p>
      
          
     
          <div className="auction-card-footer">
          <div className="timings">
            <div className ="timing-date" >
            <Tooltip title="Set a Reminder" arrow>
            <Button   variant="contained" style={{padding: '0.3rem', marginRight: '2.5rem'}} aria-label="add an alarm">
  <AlarmIcon/>
</Button>
</Tooltip>
            
         
</div>
            <div className="timing-time">
            <Tooltip title="More Details" arrow>
            <Button variant="contained" style={{padding: '0.3rem', fontSize: '1.3rem'}} color="secondary" aria-label="More details">
  <CgDetailsMore />
</Button>
</Tooltip>
            </div>
          </div>
          <Tooltip title="Add to Wishlist" arrow>
          <Button
            variant="contained"
            className="Register-button"
            color="primary"
          
            
          >
            <FaHeart size="1.3rem"/>
          </Button>
          </Tooltip>
        </div>
        </div>
     
    </Paper>
  );
};

export default AuctionCard;
