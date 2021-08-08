import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Joi from "joi-browser";
import "./style.css";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"

import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Description } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  LoginButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: "5px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "100%",
    padding: "0 30px ",
    // marginTop:'2rem',
    // marginBottom:'2rem',
  },
}));
const HostAuction = () => {
    const popError = (errorMessage) => {

        toast.error(errorMessage, {
          className :"error-toast",
          position:toast.POSITION.BOTTOM_RIGHT
        });
      }
      const [ checked, setChecked ] = useState(false);
    const [auctionName, setauctionName] = useState("");
    const [status, setstatus] = useState("");
    const [auctioneer, setauctioneer] = useState("");
    const [lot, setlot] = useState("");
    const [minEstimation, setminEstimation] = useState("");
    const [ maxEstimation, setmaxEstimation] = useState("");
    const [location, setlocation] = useState("");
    const [timings, settimings] = useState("");
    const [discription, setdiscription] = useState("");
    const [ auctionID, setauctionID] = useState("");
    const [error, setError] = useState("");
    const classes = useStyles();
    const HandleChecked = () => {
      setChecked(true);
      console.log(checked)
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const { data } = await axios.post(
            "https://lit-peak-91776.herokuapp.com/api/auction/registerAuction",
            { auctionID, auctionName, lot, auctioneer, minEstimation, maxEstimation, discription, location, timings, status},
            config
          );
          // localStorage.setItem("authToken", data.token);
        //   localStorage.setItem("username", username);
          // history.push("/");
        popError("registered successfully");
        } catch (error) {
        //   popError(error.response.data.error);
          setError(error.response.data.error);
         
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      };
    return(
        <div>
<Paper className="hostAuctionPaper" elevation={3}>
      <>
      
      <ToastContainer
      draggable ={false}
      autoClose={3000}
      ></ToastContainer>

      </>
      <h2 className="text-center pb-0 pt-2" style={{fontFamily: "cursive"}}>Host An Auction</h2>
      <div className="HostingTime"   style={{maxHeight: '30rem', overflow: 'scroll', overflowX: 'hidden'}}>
      <form onSubmit={HandleSubmit} style={{paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label> */}
          <TextField
          required 

            type="text"
            value={auctionID}
            onChange={(e) =>setauctionID(e.target.value)}
           
            label="auctionID"
            // tabIndex={1}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* {errors.email && (
            <div className="alert alert-danger">{errors.email}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="auction Name"
            type="text"
            value={auctionName}
            onChange={(e) => setauctionName(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="auctioneer"
            type="text"
            value={auctioneer}
            onChange={(e) => setauctioneer(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Lot"
            type="text"
            value={lot}
            onChange={(e) => setlot(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Minimum Estimation"
            type="text"
            value={minEstimation}
            onChange={(e) => setminEstimation(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Maximum Estimation"
            type="text"
            value={maxEstimation}
            onChange={(e) => setmaxEstimation(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Status"
            type="text"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Location"
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Description"
            type="text"
            value={discription}
            onChange={(e) => setdiscription(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="col-md-12">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <TextField
          required
          label="Timings"
            type="text"
            value={timings}
            onChange={(e) => settimings(e.target.value)}
            // name="password"
            // tabIndex={3}
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )} */}
        </div>
        <div className="checkbox-area" style={{display: 'flex',  flexWrap: 'wrap', paddingTop: '1rem'}}>
          <div className="checkbox" style={{ flexWrap: 'wrap', paddingRight: '1rem'}}>
          <label class="container"><span style={{fontSize: '0.9rem'}}>I have read understood and agree to E-auction <Link>Privacy</Link> and <Link>Terms and conditions</Link></span> 
<input type="checkbox" onClick={HandleChecked}/>
<span class="checkmark" style={{marginTop: '0.9rem'}}></span>
</label>
          </div>
          {/* <div style={{display: 'flex', flexWrap: 'wrap'}}> 
<span style={{fontSize: '0.8rem'}}>I have read understood and agree to E-auction <Link>Privacy</Link> and <Link>Terms and conditions</Link> </span>
          </div> */}

        </div>
        { checked === true ? (
        <div className="text-center pt-3">
          <Button type="submit" tabIndex={4} className={classes.LoginButton}>
            Register
          </Button>
        </div>) : (
          <div className="text-center pt-3">
          <Button disabled type="submit" tabIndex={4} className={classes.LoginButton}>
            Register
          </Button>
        </div>
        )
}
      
      
      </form>
      </div>
    </Paper>
        </div>
    )
}
export default HostAuction