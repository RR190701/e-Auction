import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Carousel from 'react-bootstrap/Carousel'
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomCarousel from "../common/CustomCarousel";
import login_art3 from "../../assets/images/login3.svg";
import login_art4 from "../../assets/images/login4.svg";
import login_art2 from "../../assets/images/login2.svg";
import Footer from "../Footer/Footer"
// import MenuIcon from "@material-ui/icons/Menu";
import { Carousel } from "react-bootstrap";
import ActiveAuctions from "../ActiveAuctions/ActiveAuctions";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import { GiCrucifix } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSnapchatGhost } from "react-icons/fa";
import "./TopMenu.css";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    marginTop: "5rem"
  },
}));

function TabPanel(props, { history }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TopMenu = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (

    <div className={classes.root}>
    
      <hr />
      <Grid container direction="col" justify="start" style={{border: '2px solid #fa255e '}}>
        
        <Grid item xs={6} style={{backgroundColor: "#fa255e"}}>
          <CustomCarousel navButtonsAlwaysVisible={false} autoPlay={true}>
            <div>
              <img src={login_art2} alt="login art 2" width="60%" />
            </div>
            <div>
              <img src={login_art3} alt="login art 3" width="75%" />
            </div>
            <div>
              <img src={login_art4} alt="login art 4" width="60%" />
            </div>
          </CustomCarousel>
          {/* </CardContent>
</Card> */}
        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '100%'}}>
            <CardHeader
              title={
                <h4 style={{ color: "#fa255e", fontFamily: "Poppins, sans-serif", marginBottom: '0' }}>
                  Our Project Overview
                </h4>
              }
            />
            <hr style={{margin: '0', padding: '0', color: 'solid #fa255e', height: '3px'}}/>
            <CardContent>
              <text style={{ fontFamily: "cursive" }}>
            
              </text>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Card>
        <div style={{ backgroundColor: "green" }}>{privateData}</div>
      </Card> */}
      <hr />

      <div className="service">
        <div className="service-container">
          <Tabs
            value={value}
            className="service-navbar"
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab className="auction-tabs" label="Active Auction" />
            <Tab className="auction-tabs" label="Result of Auction" />
           
          </Tabs>
          <TabPanel value={value} index={0}>
            <Paper>  <ActiveAuctions /></Paper>
          
          </TabPanel>
          <TabPanel value={value} index={1}>
          Item Two
          </TabPanel>
          
        </div>
      </div>
    <hr />
<Footer></Footer>
    </div>
  );
};

export default TopMenu;
