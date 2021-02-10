import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Carousel} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid'; 
import { Card, CardContent } from '@material-ui/core';
import {GiCrucifix} from 'react-icons/gi'
import {ImHammer} from 'react-icons/im'
import {BsArrowLeftRight} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import {AiOutlineFileDone} from 'react-icons/ai'
import './TopMenu.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));


const TopMenu = () => {
    const classes = useStyles();

    return (
  <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ fontFamily: 'sans-serif'}}  variant="h5" className={classes.title}>
              e-Auction
            </Typography>
            {/* <ButtonGroup size="small" aria-label="small outlined button group"> */}
  <Button className="header">Login</Button>
  <Button className="header">Signup</Button>
{/* </ButtonGroup> */}
          </Toolbar>

        </AppBar>
        {/* <div> */}
          {/* <Card>
            <CardContent>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-vector/auction-concept-people-bidding-public-260nw-1197556354.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-vector/auction-concept-people-bidding-public-260nw-1197556354.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-vector/auction-concept-people-bidding-public-260nw-1197556354.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</CardContent>
</Card>
        </div> */}

       <div>
         <Card>

         <Grid style={{  fontFamily: 'sans-serif'}}   justify="center" direction="row" container>
          <Button variant="outline-default" className="raise" startIcon={<GiCrucifix />}>
            
            Active Auctions
          </Button>
          <hr/>
          <Button className="raise" startIcon={ <BsArrowLeftRight/>}>
           
            Correngidum
          </Button>
          <hr/>
          <Button  className="raise"  startIcon={<AiOutlineFileDone/> }>
            
            Result of Auctions
          </Button>
          <hr/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Value
          </Button>
          <hr/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Org
          </Button>
          <hr/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Prod Category
          </Button>
         </Grid>
         </Card>
         </div>
         {/* <hr/> */}
        {/* <div>
         <Card>
<Grid container direction="row">
  <Card >
    <CardContent style={{ padding: '0.4rem'}}>
     <Grid container>
       <Grid  style={{backgroundColor: '#0bb7a7', borderRadius: '4px'}} item xs={6}>
         <ImHammer/>
       </Grid>
       <Grid style={{ fontSize: '1rem'}}  item xs={6}>
         Auctions 
       </Grid>
     </Grid>
    </CardContent>
  </Card>
  </Grid>
  </Card>
  
</div> */}
     <Card>
            <CardContent>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eauction.gov.in/eauction/static/img/banner_4.d7db3ba.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eauction.gov.in/eauction/static/img/banner_5.6b7528b.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      src="https://eauction.gov.in/eauction/static/img/banner_3.ab056ab.jpg"
      
    />
{/* 
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</CardContent>
</Card>
<div>
<Card style={{ padding: '0.4rem'}}>
<Grid container direction="row">
  <Card  style={{ padding: '0.4rem', paddingRight: '0rem', alignItems: 'center', marginRight: '5rem', width: '15rem', height: '3rem'}}>
    <CardContent style={{ padding: '0.4rem'}}>
     <Grid container>
       <Grid  style={{backgroundColor: '#0bb7a7', borderRadius: '4px', maxWidth: '3rem'}} item xs={6}>
         <ImHammer color="white"/>
       </Grid>
       <Grid style={{ fontSize: '0.8rem' , marginLeft: '0.3rem'}}  item xs={6}>
         Auctions Opening
       </Grid>
     </Grid>
    </CardContent>
  </Card>
  <Card style={{ padding: '0.4rem', paddingRight: '0rem', marginRight: '5rem', width: '15rem', height: '3rem'}}>
    <CardContent style={{ padding: '0.4rem'}}>
     <Grid container>
       <Grid  style={{backgroundColor: '#0bb7a7', borderRadius: '4px', maxWidth: '3rem'}} item xs={6}>
         <ImHammer color="white"/>
       </Grid>
       <Grid style={{ fontSize: '0.8rem' , marginLeft: '0.3rem'}}  item xs={6}>
         Auctions Opening
       </Grid>
     </Grid>
    </CardContent>
  </Card>
  <Card style={{ padding: '0.4rem', paddingRight: '0rem', marginRight: '5rem', width: '15rem', height: '3rem'}}>
    <CardContent style={{ padding: '0.4rem'}}>
     <Grid container>
       <Grid  style={{backgroundColor: '#0bb7a7', borderRadius: '4px', maxWidth: '3rem'}} item xs={6}>
         <ImHammer color="white"/>
       </Grid>
       <Grid style={{ fontSize: '0.8rem' , marginLeft: '0.3rem'}}  item xs={6}>
         Auctions Opening
       </Grid>
     </Grid>
    </CardContent>
  </Card>
  </Grid>
  </Card>
</div>

         

         
       
     
      </div>
    );
}
 
export default TopMenu; 