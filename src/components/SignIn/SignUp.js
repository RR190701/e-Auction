import React from 'react';
import Paper from '@material-ui/core/Paper';
import './style.css';

const SignUp = () => {


  const HandleSubmit = (e) =>{
    e.preventDefault();

    //call the server
    console.log("submitted");
  }

    return ( 
        <Paper className="sign-in-form" elevation={3}>
          
          <h1 className="text-center pb-5 sign-in-heading">SIGN IN</h1>
  <form onSubmit={HandleSubmit} className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputFirstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputFirstName"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputLastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputLastName"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="Contact" className="form-label">Contact Number</label>
    <input type="text" className="form-control" id="Contact"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email ID</label>
    <input type="text" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-9">
    <label htmlFor="inputAddress" className="form-label">Full Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputAge" className="form-label">Age</label>
    <input type="text" className="form-control" id="inputAge"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"></input>
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
    );
}
 
export default SignUp;