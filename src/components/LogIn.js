import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(8),  
        margin: 'auto',
        width:'23rem',
        height: theme.spacing(50),
      },
    },
    LoginPaper: {

        textAlign : "center",
      
      },

    InputFeild: {
          margin: theme.spacing(1),
          width: '28ch',
        
      },

   LoginHeading: {
       paddingTop:"3rem",
       paddingBottom:"2rem",
      },

      LoginButton: {
        
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: "5px",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            width:'33ch',
            padding: '0 30px',
            marginTop:'2rem',
      }
    
  }));


const LogIn = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>

<Paper className={classes.LoginPaper} elevation={3}>

<Typography className={classes.LoginHeading} variant="h5" gutterBottom>
        LOGIN
      </Typography>

<form  noValidate autoComplete="off">
      <TextField className={classes.InputFeild} id="outlined-basic" label="UserName" variant="outlined" />
      <TextField
      className={classes.InputFeild}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      <Button type ="submit"
      className={classes.LoginButton} >
        LOGIN
      </Button>
    </form>
</Paper>
        </div>
     );
}
 
export default LogIn;