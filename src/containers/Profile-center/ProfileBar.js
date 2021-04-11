import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./style.css";
import Dashboard from './../Dasboard/Dashboard';


const ProfileBar = (props) => {
  
    
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
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
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // console.log(props)
    return (
      <div className={classes.root}>
        <AppBar position="static" className="profile-navbar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
          indicatorColor="secondary"
          textColor="secondary">
            <Tab className="profile-bar-navbar-items" label="Dashboard"  {...a11yProps(0)} />
            <Tab  className="profile-bar-navbar-items" label="Biding history" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel className =" tabpanels" value={value} index={0}>
            <Dashboard username={props.username} email={props.email} address={props.address} profession={props.profession}></Dashboard>
    </TabPanel>
        <TabPanel  className =" tabpanels" value={value} index={1}>
        </TabPanel>

      </div>
    );
}
 
export default ProfileBar;