import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonGroup from '@material-ui/core/ButtonGroup';

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


const TopMenu = () => {
    const classes = useStyles();

    return (
  <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              e-Auction
            </Typography>
            <ButtonGroup size="small" aria-label="small outlined button group">
  <Button>Login</Button>
  <Button>Signup</Button>
</ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
}
 
export default TopMenu;