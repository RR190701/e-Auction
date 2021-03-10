import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./style.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./../SignIn/Error";


const useStyles = makeStyles((theme) => ({

  ResetPasswordButton: {
    
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

const ResetPassword = () => {


  const classes = useStyles();

  //validation schema
  const ValidationSchema = Yup.object().shape({
   
    password: Yup.string()
    .trim()
      .required("*Password is required.")
      .min(8, "*Password is too short - should be 8 chars minimum.")
      .matches(/^(?=.*[0-9])/, "*Password must contain a number."),

      
    confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'.trim())],"Password should match")
    .required("*Password is required."),

  });

 //on submition
 const HandleSubmit = (values, { setSubmitting, resetForm }) => {
  setSubmitting(true);


  Object.keys(values).map((key) => {
    values[key] = values[key].trim();
})

//removing confirmPassword
delete values.confirmPassword;

  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    resetForm();

    setSubmitting(false);
  }, 500);

}


  return (
    <Formik
    initialValues={{
      password: "",
      confirmPassword: "",
    }}
    validationSchema={ValidationSchema}
    onSubmit={HandleSubmit}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      setFieldValue,
    }) => (

      //sign up form
      <Paper className="ResetPasswordPaper sign-in-form" elevation={3}>
        {/* reset password heading */}
        <h2 className="text-center pb-4 pt-5">RESET PASSWORD</h2>
        <form onSubmit={handleSubmit} className="row g-3">
 

          {/* password */}
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="form-control"
            />
            <Error touched={touched.password} message={errors.password} />
          </div>

           {/* confirm password */}
          <div className="col-md-12">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
               value={values.confirmPassword}
              className="form-control"
            />
            <Error touched={touched.confirmPassword} message={errors.confirmPassword} />
          </div>

   <div className=" ResetPasswordButton text-center pt-4">
     <Button type="submit" className={classes.ResetPasswordButton}>
       RESET PASSWORD
     </Button>
  </div>

        </form>
      </Paper>
    )}
  </Formik>
 
  );
};

export default ResetPassword;
