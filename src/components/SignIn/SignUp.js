import React from 'react';
import Paper from '@material-ui/core/Paper';
import './style.css';
import { Formik } from "formik";
import * as Yup from 'yup';
import Error from './Error'


const SignUp = () => {
  const ValidationSchema = Yup.object().shape({
    FirstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  
  
    LastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
  
  Number: Yup.string()
    .required("Phone number is required")
    .matches(
  /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
  
  email: Yup.string().email().required("Email is required"),
  })

  const HandleSubmit = (e) =>{
    e.preventDefault();

    //call the server
    console.log("submitted");
  }

    return ( 
      <Formik initialValues={{ FirstName: '', LastName: '', Address: '', City: '', email: ''}}
      validationSchema={ValidationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur}) => (
        <Paper className="sign-in-form" elevation={3}>
   
          <h1 className="text-center pb-5 sign-in-heading">SIGN IN</h1>
  <form onSubmit={HandleSubmit} className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputFirstName" className="form-label">First Name</label>
    <input type="text" name="FirstName" onChange={handleChange}  id="FirstName" 
								 value={values.FirstName}   className="form-control" />
                   <Error touched={touched.FirstName} message={errors.FirstName} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputLastName" className="form-label">Last Name</label>
    <input type="text" name="LastName" id="LastName"  onChange={handleChange} value={values.LastName} 	
							  className="form-control" />
                 <Error touched={touched.LastName} message={errors.LastName} />
  </div>
  <div className="col-md-6">
    <label htmlFor="Contact" className="form-label">Contact Number</label>
    <input type="number" name="number" id="Number"   onChange={handleChange}  className="form-control" id="Contact"  	
/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email ID</label>
    <input type="email" name="email" id="email"  onChange={handleChange} value={values.email} className="form-control" 	
							 id="inputEmail4"/> <Error touched={touched.email} message={errors.email} />
  </div>
  <div className="col-md-9">
    <label htmlFor="inputAddress" className="form-label">Full Address</label>
    <input type="text" className="form-control"  onChange={handleChange} value={values.Address} id="Address" 
							 placeholder="1234 Main St"></input>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputAge" className="form-label">Age</label>
    <input type="text" className="form-control"  onChange={handleChange} id="inputAge"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control"  onChange={handleChange} id="City" value={values.City}></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState"  className="form-label">State</label>
    <select id="inputState"  className="form-select">
      <option selected>Choose...</option>
      <option>Uttar Pradesh</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlfor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"></input>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" htmlfor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary sign-in-button">Sign in</button>
  </div>
</form>
</Paper>
        )}
</Formik>
    );
}
 
export default SignUp;