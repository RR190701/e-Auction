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
    .required("*Name is required"),

    Zip: Yup.string()
    .min(6, "Too Short!")
    .max(7, "Invalid!")
    .required("*Zip is required"),
  
    password: Yup.string()
    .required("*Password is required.")
    .min(8, "*Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "*Password must contain a number."),
    
    Age: Yup.string()
    .required("*Age is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
    
    Address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*Address is required"),

    City: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*City is required"),
  
  Number: Yup.string()
    .matches(
      /\d{5}([- ]*)\d{6}/,
      "*Invalid phone number"
    )
  .min(10, "Too Short!")
  .max(13, "Too Long!")
  .required("*Number is required"),

    email: Yup.string()
    .email("*Must be a valid email address")
    .required("*Email is required")
});
  

  const HandleSubmit = (e) =>{
    e.preventDefault();

    //call the server
    console.log("submitted");
  }

    return ( 
      <Formik initialValues={{ Name: '', password: '', Address: '', City: '', Age:'', email: '', Number: '', Zip: ''}}
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
  <form onSubmit={handleSubmit}  className="row g-3">
  <div className="col-md-6">
    <label htmlFor="Name" className="form-label">Full Name</label>
    <input type="text" name="Name" onChange={handleChange}  id="Name" onBlur={handleBlur}
								 value={values.Name}    className="form-control"  />
                   <Error touched={touched.Name} message={errors.Name} />
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
  <div className="col-md-6">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" name="password" id="password"  onChange={handleChange}  onBlur={handleBlur} value={values.password} 	
							  className="form-control" />
                 <Error touched={touched.password} message={errors.password} />
  </div>
  <div className="col-md-9">
    <label htmlFor="Address" className="form-label">Full Address</label>
    <input type="text" className="form-control"  onChange={handleChange} onBlur={handleBlur} value={values.Address} id="Address" 
							 placeholder="1234 Main St"/>
                <Error touched={touched.Address} message={errors.Address} />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputAge" className="form-label">Age</label>
    <input type="text" className="form-control"  onChange={handleChange}  onBlur={handleBlur} value={values.Age} id="inputAge"></input>
    <Error touched={touched.Age} message={errors.Age} />
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
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Odisha</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telangana</option>
      <option>Tripura</option>
      <option>Uttar Pradesh</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>

    </select>
  </div>
  <div className="col-md-2">
    <label htmlfor="Zip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="Zip"   onChange={handleChange}  onBlur={handleBlur}  value={values.Zip}/>
    <Error touched={touched.Zip} message={errors.Zip}/>
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