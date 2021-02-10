import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./style.css";


const useStyles = makeStyles((theme) => ({

      LoginButton: {
        
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: "5px",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            width:'17rem',
            padding: '0 30px ',
            // marginTop:'2rem',
            // marginBottom:'2rem',
      }
    
  }));


const LogIn = () => {

    const classes = useStyles();

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () =>{
    const errors = {};

    if(emailAddress.trim() === "")
    errors.emailAddress = "Email required";
    if(password.trim() === "")
    errors.password="password required";

      return Object.keys(errors).length === 0?null:errors;
    }

    const HandleSubmit =(e) =>{
    e.preventDefault();
    const errors  = validate();
    (errors)?setErrors(errors):setErrors({});
    if(errors)return;


      //call server
      console.log("login done");
        }

    const validateProperty = ({name, value}) =>{

   if(name ==="emailAddress"){
     if(value.trim()==="")return "Email required";
   }
 
   if(name === "password"){
     if(value.trim()==="")return "password required";
   }
    }    

    const HandleEmail =({currentTarget:input})=>{
      const e = {...errors};
      const errorMessage = validateProperty(input);
      if(errorMessage) e[input.name] = errorMessage;
      else delete e[input.name];


      setErrors(e);
      setEmailAddress(input.value);
    }
   
    const HandlePassword = ({currentTarget:input}) =>{
      const e = {...errors};
      const errorMessage = validateProperty(input);
      if(errorMessage) e[input.name] = errorMessage;
      else delete e[input.name];


      setErrors(e);
      setPassword(input.value);
    }
    return ( 
<Paper className="LoginPaper" elevation={3}>

<h1 className="text-center pb-4 pt-5">LOG IN</h1>
      <form onSubmit={HandleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" value ={emailAddress} 
    onChange={HandleEmail}
    name = "emailAddress"
     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
     {errors.emailAddress && <div className ="alert alert-danger">{errors.emailAddress}</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value ={password} 
    onChange={HandlePassword}
    name ="password"
    className="form-control" id="exampleInputPassword1"></input>
    {errors.password && <div className ="alert alert-danger">{errors.password}</div>}
  </div>
  <div className="text-center pt-4">
  <Button type ="submit"
      className={classes.LoginButton} >
        LOGIN
      </Button>
  </div>
 
</form>
    
</Paper>
     );
}
 
export default LogIn;