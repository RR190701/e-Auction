import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Carousel from 'react-bootstrap/Carousel'
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import CustomCarousel from "../common/CustomCarousel";
import login_art3 from "../../assets/images/login3.svg";
import login_art4 from "../../assets/images/login4.svg";
import login_art2 from "../../assets/images/login2.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { Carousel } from "react-bootstrap";
import UpcomingAuctions from "./../UpcomingAuctions/UpcomingAuctions";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import { GiCrucifix } from "react-icons/gi";
import { ImHammer } from "react-icons/im";

import { BsArrowLeftRight } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import "./TopMenu.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function TabPanel(props) {
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

const TopMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ fontFamily: "sans-serif" }}
            variant="h5"
            className={classes.title}
          >
            e-Auction
          </Typography>
          {/* <ButtonGroup size="small" aria-label="small outlined button group"> */}
          <Link to="/log-in">
            {" "}
            <Button className="header">Login</Button>
          </Link>
          <Link to="/sign-up">
            <Button className="header">Signup</Button>
          </Link>
          {/* </ButtonGroup> */}
        </Toolbar>
      </AppBar>

      <hr />

      {/* <Button className="raise" startIcon={ <BsArrowLeftRight/>}>
           
            Correngidum
          </Button>
          <hr style={{marginRight: '2rem'}}/> */}

      {/* <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Value
          </Button>
          <hr style={{marginRight: '2rem'}}/> */}
      {/* <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Org
          </Button>
          <hr style={{marginRight: '1rem'}}/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Prod Category
          </Button> */}

      {/* <hr/> */}
      {/* <div>
         <Card>
<Grid container direction="row">
  <Card >
    <CardContent style={{ padding: '0.4rem'}}>
     <Grid container>
       <Grid  style={{backgroundColor: '#0bb7a7', borderRadius: '4px'}} item xs={6}>
         <ImHammer/>
       </Grid>
       <Grid style={{ fontSize: '1rem'}}  item xs={6}>
         Auctions 
       </Grid>
     </Grid>
    </CardContent>
  </Card>
  </Grid>
  </Card>
  
</div> */}
      <hr />
      <Grid container direction="col" justify="start">
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
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
        <Grid item xs={5}>
          <Card>
            <CardHeader
              title={
                <h4 style={{ color: "#fa255e", fontFamily: "popins" }}>
                  Overview
                </h4>
              }
            />
            <CardContent>
              <text style={{ fontFamily: "popins" }}>
                Type keywords relative to your project to find the illustrations
                you need.Type keywords relative to your project to find the
                illustrations you need.Type keywords relative to your project to
                find the illustrations you need.Type keywords relative to your
                project to find the illustrations you need.Type keywords
                relative to your project to find the illustrations you need.Type
                keywords relative to your project to find the illustrations you
                need.Type keywords relative to your project to find the
                illustrations you need. Type keywords relative to your project
                to find the illustrations you need.Type keywords relative to
                your project to find the illustrations you need.Type keywords
                relative to your project to find the illustrations you need.
                Type keywords relative to your project to find the illustrations
                you need.Type keywords relative to your project to find the
                illustrations you need. Type keywords relative to your project
                to find the illustrations you need. Type keywords relative to
                your project to find the illustrations you need.Type keywords
                relative to your project to find the illustrations you need.
                Type keywords relative to your project to find the illustrations
                you need. Type keywords relative to your project to find the
                illustrations you need.
              </text>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <hr />
      
        <div  className = "service">
          <div  className ="service-container">

          <Tabs
            value={value}
            className ="service-navbar"
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="Upcoming Auction" />
            <Tab label="Result of Auction" />
            <Tab label="Host an Auction" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <UpcomingAuctions />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>

          </div>
          
        </div>
      
    </div>
  );
};

export default TopMenu;
