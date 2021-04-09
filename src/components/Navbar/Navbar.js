import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from 'react-router-dom';
import "./style.css";


const useStyles = makeStyles((theme) => ({
   
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = (props) => {

      const classes = useStyles();

      
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    const { history } = props;
    history.push("/log-in");
    //console.log(props);
  };

    return (  
    <div>
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
      {/* <Link to="/log-in"> */}
    
        <Button className="header" onClick={logoutHandler}>Logout</Button>
      {/* </Link> */}
      {/* <Link to="/sign-up"> */}
        <Button className="header">Take Part</Button>
      {/* </Link> */}
      {/* </ButtonGroup> */}
    </Toolbar>
    
  </AppBar> 
   </div>
  );
}
 
export default withRouter(Navbar);