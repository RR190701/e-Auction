import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link } from "react-router-dom";
import CustomCarousel from '../common/CustomCarousel';
import login_art3 from '../../assets/images/login3.svg';
import login_art4 from '../../assets/images/login4.svg';
import login_art2 from '../../assets/images/login2.svg';
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
            <Link to="/log-in"> <Button className="header">Login</Button>
            </Link>
            <Link  to="/sign-up">
  <Button className="header">Signup</Button>
  </Link>
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
<hr/>
       <div>
         <Card style={{border: '1px solid  #fa255e'}}>

         <Grid style={{  fontFamily: 'sans-serif'}}   justify="center" direction="row" container>
          <Button variant="outline-default" className="raise" startIcon={<GiCrucifix />}>
            
            Active Auctions
          </Button>
          <hr style={{marginRight: '2rem'}}/>
          <Button className="raise" startIcon={ <BsArrowLeftRight/>}>
           
            Correngidum
          </Button>
          <hr style={{marginRight: '2rem'}}/>
          <Button  className="raise"  startIcon={<AiOutlineFileDone/> }>
            
            Result of Auctions
          </Button>
          <hr style={{marginRight: '2rem'}}/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Value
          </Button>
          <hr style={{marginRight: '2rem'}}/>
          <Button  className="raise" startIcon={<BiRupee/> }>
            
            Auctions By Org
          </Button>
          <hr style={{marginRight: '1rem'}}/>
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
<hr/>
<Grid container direction="col" justify="start">
  <Grid item xs={7}>
     {/* <Card>
            <CardContent > */}
        {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eauction.gov.in/eauction/static/img/banner_4.d7db3ba.jpg"
      alt="First slide"
    /> */}
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  {/* </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eauction.gov.in/eauction/static/img/banner_5.6b7528b.jpg"
      alt="Third slide"
    /> */}

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  {/* </Carousel.Item>
  <Carousel.Item>
    <img
     
      src="https://eauction.gov.in/eauction/static/img/banner_3.ab056ab.jpg"
      
    /> */}
{/* 
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  {/* </Carousel.Item>
</Carousel> */}
	<CustomCarousel navButtonsAlwaysVisible={false} autoPlay={true}>
									<div>
										<img src={login_art2} alt="login art 2" width="60%" />
									</div>
									<div>
										<img src={login_art3} alt="login art 3" width="60%" />
									</div>
									<div>
										<img src={login_art4} alt="login art 4" width="60%" />
									</div>
								</CustomCarousel>
{/* </CardContent>
</Card> */}
</Grid>
<Grid item xs={5}>
  <Card>
    <CardHeader title={'Overview'}/>
    <CardContent>
      <text>Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.
      Type keywords relative to your project to find the illustrations you need.
      </text>
    </CardContent>

  </Card>

</Grid>
</Grid>
{/* <div>
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
</div> */}

         

         
       
     
      </div>
    );
}
 
export default TopMenu; 