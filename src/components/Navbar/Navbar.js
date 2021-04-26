import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdHome } from "react-icons/md";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  // menuButton: {
  //   marginRight: theme.spacing(1),
  // },
  title: {
    flexGrow: 1,
    fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    const { history } = props;
    history.push("/log-in");
    //console.log(props);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="home-icon-div"
            title = "home"
          >
<MenuIcon></MenuIcon>
          </IconButton>
          <Typography
            style={{ fontFamily: "sans-serif" }}
            variant="h5"
            className={classes.title}
           
          ><Link to ="/" className ="eAuction-home">
           eAuction
          </Link>
          </Typography>
          {localStorage.getItem("authToken") ? (
            <div>
              
              <Button className="header" ><Link className ="top-navbar-links"  to ={`/profile/${localStorage.getItem("username")}`} >
              <CgProfile fontSize="1.8rem" padding="0" fill="white"/>
              </Link></Button>
              <Button className="header log-out-button" onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
             <Button  className="header"><Link className ="top-navbar-links"  to = "/log-in">
                LogIN
              </Link></Button> 
              <Button className="header "><Link className ="top-navbar-links" to = "/sign-up">
                SignUP
              </Link></Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
