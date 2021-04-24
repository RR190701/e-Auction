import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
  root: {
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const SignUp = ({ history }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [profession, setprofession] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [number, setnumber] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);
  const emailTakens = ["test@gmail.com", "rashikarawat01@gmail.com"];

  //validation schema
  const ValidationSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(5, "*Too Short!")
      .max(50, "*Too Long!")
      .required("*Name is required"),

    profession: Yup.string()
      .trim()
      .min(2, "*Too Short!")
      .max(50, "*Too Long!")
      .required("*Profession is required"),

    zip: Yup.string()
      .matches(/^[1-9][0-9]{5}$/, "*Invalid Zip")
      .required("*Zip is required"),

    password: Yup.string()
      .trim()
      .required("*Password is required.")
      .min(8, "*Password is too short - should be 8 chars minimum.")
      .matches(/^(?=.*[0-9])/, "*Password must contain a number."),

    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("password".trim())], "Password should match")
      .required("*Password is required."),

    age: Yup.number()
      .required("*Age is required")
      .min(18, "*Must be above 18")
      .max(99, "*Must be younger than 99"),

    address: Yup.string()
      .trim()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("*Address is required"),

    city: Yup.string()
      .trim()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("*City is required"),

    about: Yup.string()
      .trim()
      .required("*About is required")
      .min(5, "Too Short!")
      .max(250, "Too Long!"),

    number: Yup.string()
      .matches(/\d{5}([- ]*)\d{6}/, "*Invalid phone number")
      .required("*Number is required"),

    state: Yup.string().required("*State is required"),

    email: Yup.string()
      .trim()
      .lowercase()
      .email("*Must be a valid email address")
      .notOneOf(emailTakens, "*Email already taken")
      .required("*Email is required"),
  });
  const popError = (errorMessage) => {

    toast.error(errorMessage, {
      className :"error-toast",
      position:toast.POSITION.BOTTOM_RIGHT
    });
  }
  //on handle
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password, number, age, profession, address },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      popError(error.response.data.error);
      setError(error.response.data.error);
     
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  //removing confirmPassword

  return (
    <Formik
      initialValues={{
        // fullname: "",
        // profession: "",
        // number: "",
        // email: "",
        // password: "",
        confirmPassword: "",
        about: "",
        // age: "",
        // address: "",
        city: "",
        state: "",
        zip: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={HandleSubmit}
    >
      {({
        values,
        errors,
        touched,
        // handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        //sign up form
        <Paper className="sign-in-form" elevation={3}>
           <>
      
      <ToastContainer
      draggable ={false}
      autoClose={3000}
      ></ToastContainer>

      </>
          {/* sign heading */}
          <h1 className="text-center pb-5 sign-in-heading" style={{fontFamily: 'Cursive'}}>SIGN UP</h1>
          <form onSubmit={HandleSubmit} className="row g-3">
            {/* full name */}
            <div className="col-md-6">
              {/* <label htmlFor="fullname" className="form-label">
                User Name
              </label> */}
              <TextField
                type="text"
                
                color="secondary"
                required
                label="Username"
                name="username"
                onChange={(e) => setusername(e.target.value)}
                id="username"
                onBlur={handleBlur}
                value={username}
                className="form-control"
              />
              {/* <Error touched={touched.fullname} message={errors.fullname} /> */}
            </div>

            {/* profession */}
            <div className="col-md-6">
              {/* <label htmlFor="profession" className="form-label">
                Profession
              </label> */}
              <TextField
                type="text"
                color="secondary"
                required
                label="Profession"
                name="profession"
                id="profession"
                onChange={(e) => setprofession(e.target.value)}
                // onChange={handleChange}
                onBlur={handleBlur}
                value={profession}
                className="form-control"
              />
              {/* <Error touched={touched.profession} message={errors.profession} /> */}
            </div>
            {/* phone number */}
            <div className="col-md-6">
              {/* <label htmlFor="number" className="form-label">
                Contact Number
              </label> */}
              <TextField
                type="text"
                required
                color="secondary"
                label="Contact Number"
                name="number"
                id="number"
                onChange={(e) => setnumber(e.target.value)}
                onBlur={handleBlur}
                value={number}
                className="form-control"
              />
              {/* <Error touched={touched.number} message={errors.number} /> */}
            </div>

            {/* email */}
            <div className="col-md-6">
              {/* <label htmlFor="email" className="form-label">
                Email ID
              </label> */}
              <TextField
                type="text"
                required
                color="secondary"
                label="Email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onBlur={handleBlur}
                className="form-control"
              />
              {/* <Error touched={touched.email} message={errors.email} /> */}
            </div>

            {/* password */}
            <div className="col-md-6">
              {/* <label htmlFor="password" className="form-label">
                Password
              </label> */}
              <TextField
              required
              label="Password"
                type="password"
                name="password"
                color="secondary"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                onBlur={handleBlur}
                value={password}
                className="form-control"
              />
              {/* <Error touched={touched.password} message={errors.password} /> */}
            </div>

            {/* confirm password */}
            <div className="col-md-6">
              {/* <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label> */}
              <TextField
              // required
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                color="secondary"
                label="Confirm Password"
                onChange={(e) => setConfirmpassword(e.target.value)}
                onBlur={handleBlur}
                value={values.confirmPassword}
                className="form-control"
              />
              {/* <Error
                touched={touched.confirmPassword}
                message={errors.confirmPassword}
              /> */}
            </div>

            {/* about */}
            <div className="col-md-12">
              {/* <label htmlFor="about" className="form-label">
                About
              </label> */}
              <TextField
              // required
                type="text"
                label="About"
                className="form-control"
                color="secondary"
                name="about"
                // onChange={(e) => setabout(e.target.value)}
                onBlur={handleBlur}
                value={values.about}
                id="about"
                placeholder="Tell us something about you.."
              />
              {/* <Error touched={touched.about} message={errors.about} /> */}
            </div>

            {/* age */}
            <div className="col-md-3">
              {/* <label htmlFor="age" className="form-label">
                Age
              </label> */}
              <TextField
                type="text"
                required
                label="Age"
                color="secondary"
                className="form-control"
                name="age"
                onChange={(e) => setage(e.target.value)}
                onBlur={handleBlur}
                value={age}
                id="age"
              />
              {/* <Error touched={touched.age} message={errors.age} /> */}
            </div>

            {/* address */}
            <div className="col-md-9">
              {/* <label htmlFor="Address" className="form-label">
                Full Address
              </label> */}
              <TextField
                type="text"
                required
                label="Address"
                color="secondary"
                className="form-control"
                onChange={(e) => setaddress(e.target.value)}
                onBlur={handleBlur}
                value={address}
                id="address"
                placeholder="Full Address ..."
              />
              {/* <Error touched={touched.address} message={errors.address} /> */}
            </div>

            {/* city */}
            {/* <div className="col-md-6">
              {/* <label htmlFor="city" className="form-label">
                City
              </label> */}
              {/* <TextField
                type="text"
                required
                label="City"
                className="form-control"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                id="city"
                value={values.city}
              />
              <Error touched={touched.city} message={errors.city} />
            </div> */}

            {/* state */}
            {/* <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                id="state"
                className="form-select"
                type="text"
                name="state"
                onChange={handleChange}
                onBlur={handleBlur}
                id="state"
                value={values.state}
              >
                <option selected></option>
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
              <Error touched={touched.state} message={errors.state} />
            </div> */}

            {/* zip */}
            {/* <div className="col-md-2">
              <label htmlfor="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                name="zip"
                id="zip"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.zip}
              />
              <Error touched={touched.zip} message={errors.zip} />
            </div> */} 
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary sign-in-button"
                disabled={isSubmitting}
              >
                Sign in
              </button>
            </div>
          </form>
        </Paper>
      )}
    </Formik>
  );
};

export default SignUp;
