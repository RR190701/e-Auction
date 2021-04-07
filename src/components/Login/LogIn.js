import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Joi from "joi-browser";
import "./style.css";
import axios from 'axios';
import {Link} from 'react-router-dom'

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


const LogIn = ({history}) => {

    const classes = useStyles();

    // const [account, setAccount] = useState({ email :"", password: ""});
    const [errors, setErrors] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    useEffect(() => {
      if(localStorage.getItem("authToken")){
        history.push("/");
      }
    }, [history])
  // const  schema = {
  //   email: Joi.string().email().required().label("Email Address"),
  //   password: Joi.string().required().label("Password")
  // };

    
  const LoginSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
try {
  const {data} = await axios.post("/api/auth/login", { email, password},config);
localStorage.setItem("authToken", data.token);
history.pushState('/');
} catch (error)
{
  setErrors(error.response.data.error)
  setTimeout(() => {
    setErrors("");
  }, 5000);
  }
}
    
  

//     const validate = () =>{
    
//     const {error} = Joi.validate(email, schema, {abortEarly:false});
//     if(!error)return null;

//     const errors = {};
//     for(let item of error.details)
//     errors[item.path[0]]=item.message;

// return errors;

//     }

//     const validateProperty = ({name, value}) =>{
  
//       const obj = {[name]: value};
//       const subSchema = {
//       [name]:schema[name]
//       }

//       const {error} = Joi.validate(obj, subSchema)
//       return error? error.details[0].message:null;


//     }    

  //  const HandleChange = ({currentTarget:input}) =>{
  //   const a = {email};
  //   const b = {password}
  //   a[input.name]= input.value;
  //   b[input.name]= input.value;

  //   const e = {...errors};
  //   const errorMessage = validateProperty(input);
  //   if(errorMessage) e[input.name] = errorMessage;
  //   else delete e[input.name];


  //   setErrors(e);
  //   setEmail(a);
  //   setpassword(b);

  //  } 


    return ( 
<Paper className="LoginPaper" elevation={3}>

<h1 className="text-center pb-4 pt-5">LOG IN</h1>
      <form onSubmit={LoginSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" value ={email} 
    onChange={(e)=> setEmail(e.target.value)}
    name = "email"
    tabIndex={1}
     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
     {errors.email && <div className ="alert alert-danger">{errors.email}</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password
    
    <Link to="/ForgetPassword" tabIndex={2}>Forget Password ?</Link>
    </label>
    <input type="password" value ={password} 
    onChange={(e)=> setpassword(e.target.value)}
    name ="password"
    tabIndex={3}
    className="form-control" id="exampleInputPassword1"></input>
    {errors.password && <div className ="alert alert-danger">{errors.password}</div>}
  </div>
  <div className="text-center pt-4">
  <Button type ="submit" tabIndex={4} 
      className={classes.LoginButton} >
        LOGIN
      </Button>
  </div>
 
</form>
    
</Paper>
     );
}
 
export default LogIn;