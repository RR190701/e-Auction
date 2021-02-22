import React from 'react';
import Paper from '@material-ui/core/Paper';
import './style.css';
import { Formik } from "formik";
import * as Yup from 'yup';
import Error from './Error'


const SignUp = () => {
  const ValidationSchema = Yup.object().shape({
    Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
    Zip: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Zip is required"),
  
    UserName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
    
    Address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
    City: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
  
  Number: Yup.string()
  //   .required("Phone number is required")
  //   .matches(
  // /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  //     "Invalid phone number"
  //   ),
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Lastname is required"),
    email: Yup.string()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required")
});
  

  // const HandleSubmit = (e) =>{
  //   e.preventDefault();

  //   //call the server
  //   console.log("submitted");
  // }

    return ( 
      <Formik initialValues={{ Name: '', UserName: '', Address: '', City: '', email: '', Number: '', Zip: ''}}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
         
          setSubmitting(false);
        }, 500);
      }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit,  isSubmitting,
        setFieldValue}) => (
        <Paper className="sign-in-form" elevation={3}>
   
          <h1 className="text-center pb-5 sign-in-heading">SIGN IN</h1>
  <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-6">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" name="Name" onChange={handleChange}  id="Name" onBlur={handleBlur}
								 value={values.Name}    className="form-control"  />
                   <Error touched={touched.Name} message={errors.Name} />
  </div>
  <div className="col-md-6">
    <label htmlFor="UserName" className="form-label">User Name</label>
    <input type="text" name="UserName" id="UserName"  onChange={handleChange}  onBlur={handleBlur} value={values.UserName} 	
							  className="form-control" />
                 <Error touched={touched.UserName} message={errors.UserName} />
  </div>
  <div className="col-md-6">
    <label htmlFor="Number" className="form-label">Contact Number</label>
    <input type="text" name="Number" id="Number"   onChange={handleChange} onBlur={handleBlur} className="form-control"  	
/> <Error touched={touched.Number} message={errors.Number} />
  </div>
  <div className="col-md-6">
    <label htmlFor="email" className="form-label">Email ID</label>
    <input type="text" name="email" id="email"  onChange={handleChange} value={values.email}  onBlur={handleBlur}  className="form-control"	
							 /> <Error touched={touched.email} message={errors.email} />
  </div>
  <div className="col-md-9">
    <label htmlFor="Address" className="form-label">Full Address</label>
    <input type="text" className="form-control"  onChange={handleChange} onBlur={handleBlur} value={values.Address} id="Address" 
							 placeholder="1234 Main St"/>
                <Error touched={touched.Address} message={errors.Address} />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputAge" className="form-label">Age</label>
    <input type="number" className="form-control"  onChange={handleChange}  onBlur={handleBlur} id="inputAge"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="City" className="form-label">City</label>
    <input type="text" className="form-control"  onChange={handleChange}  onBlur={handleBlur} id="City" value={values.City}/>
    <Error touched={touched.City} message={errors.City} />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState"  className="form-label">State</label>
    <select id="inputState"  className="form-select">
      <option selected>Choose...</option>
      <option>Uttar Pradesh</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlfor="Zip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="Zip"   onChange={handleChange}  onBlur={handleBlur}  value={values.Zip}/>
    <Error touched={touched.Zip} message={errors.Zip}/>
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
    <button type="submit" className="btn btn-primary sign-in-button"  disabled={isSubmitting}>Sign in</button>
  </div>
</form>
</Paper>
        )}
</Formik>
    );
}
 
export default SignUp;