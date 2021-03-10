import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Joi from "joi-browser";
import "./style.css";


const useStyles = makeStyles((theme) => ({

      ForgetPasswordButton: {
        
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


const ForgetPassword = () => {

    const classes = useStyles();

    const [account, setAccount] = useState({ email:""});
    const [errors, setErrors] = useState({});

    
  const  schema = {
    email: Joi.string().email().required().label("Email Address")
  };

    
    const HandleSubmit =(e) =>{
      e.preventDefault();
      const errors  = validate();
      (errors)?setErrors(errors):setErrors({});
      if(errors)return;
  
  
        //call server
  alert(JSON.stringify(account))
          }
  

    const validate = () =>{
    
    const {error} = Joi.validate(account, schema, {abortEarly:false}); //will return errors after checkig for all the fields
    if(!error)return null;

    const errors = {};
    for(let item of error.details)
    errors[item.path[0]]=item.message;

return errors;

    }

    const validateProperty = ({name, value}) =>{
  
      const obj = {[name]: value};
      const subSchema = {
      [name]:schema[name]
      }

      const {error} = Joi.validate(obj, subSchema)
      return error? error.details[0].message:null;


    }    

   const HandleChange = ({currentTarget:input}) =>{
    const a = {...account};
    a[input.name]= input.value;

    const e = {...errors};
    const errorMessage = validateProperty(input);
    if(errorMessage) e[input.name] = errorMessage;
    else delete e[input.name];


    setErrors(e);
    setAccount(a);

   } 


    return ( 
<Paper className="ForgetPasswordPaper" elevation={3}>

<h2 className="text-center pb-4 pt-5">FORGET PASSWORD</h2>
      <form onSubmit={HandleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your registered email</label>
    <input type="text" value ={account.email} 
    onChange={HandleChange}
    name = "email"
     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
     {errors.email && <div className ="alert alert-danger">{errors.email}</div>}
  </div>

  <div className="text-center pt-4">
  <Button type ="submit" 
      className={classes.ForgetPasswordButton} >
        SEND EMAIL
      </Button>
  </div>
 
</form>
    
</Paper>
     );
}
 
export default ForgetPassword;