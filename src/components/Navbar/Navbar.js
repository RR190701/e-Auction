import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {RiAuctionFill} from "react-icons/ri";
import IconButton from "@material-ui/core/IconButton";
import Modal from '@material-ui/core/Modal';
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneBank } from "react-icons/ai";
import Tooltip from "@material-ui/core/Tooltip";
import HostAuction from '../HostAuction/HostAuction';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  // menuButton: {
  //   marginRight: theme.spacing(1),
  // },
  title: {
    flexGrow: 1,
    fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
  },
  
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
 
}));


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Navbar = (props) => {
  const classes = useStyles();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    const { history } = props;
    history.push("/log-in");
    //console.log(props);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            style={{color: "white", marginRight: '0.8rem'}}
            aria-label="menu"
            className="home-icon-div"
            title = "home"
            disabled
          >
<RiAuctionFill size="2.2rem"/>
          </IconButton>
          <Typography
            style={{ fontFamily: "cursive" }}
            variant="h5"
            className={classes.title}
           
          >   <Tooltip title="Go To Home" arrow size="large">
            <Link to ="/" className ="eAuction-home">
           E-Auction
          </Link>
          </Tooltip>
          </Typography>
          {localStorage.getItem("authToken") ? (
            <div>
              <Button className="header" ><Link className ="top-navbar-links"  to ={`/profile/${localStorage.getItem("username")}`} >
              <CgProfile fontSize="1.8rem" padding="0" fill="white"/>
              </Link></Button>
               <Button className="header log-out-button"  onClick={handleOpen} startIcon={<AiTwotoneBank/>}>
                Host An Auction
              </Button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <HostAuction/>
      </Modal>
              <Button className="header log-out-button" onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
             <Button  className="header"><Link className ="top-navbar-links"  to = "/log-in">
                LOG-IN
              </Link></Button> 
              <Button className="header "><Link className ="top-navbar-links" to = "/sign-up">
                SIGN-UP
              </Link></Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
