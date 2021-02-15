import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import {
	
	Card,
	CardHeader,
	CardContent,
	Divider,
	
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const UpcomingAuctions = () => {
    return(
        <div>
    <Card
    className={'add-shadow'}
    style={{
        Height: '14.25rem',
        border: '1px solid #fa255e',
        width: '16.95rem',
        backgroundColor: '#fa255e',
        borderBottomLeftRadius: '0.6rem',
        borderBottomRightRadius: '0.6rem',
        borderTopLeftRadius: '0.6rem',
        borderTopRightRadius: '0.6rem',
    }}>
    <CardHeader
        title={
            <Typography style={{ color: 'white'}} variant="h5" component="h5">
                Machine Learning
            </Typography>
        }
    />
    <CardContent
        style={{
            backgroundColor: 'white',
        }}>
       
        
        <Grid container>
            <Grid item xs={6}>
                Name :
            </Grid>
            <Grid item xs={6}>
    
            </Grid>
        </Grid>
        <Divider className="m-2" />
        <Grid container>
            <Grid item xs={6}>
                Owner :
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                Status :
            </Grid>
            <Grid item xs={6}>
            
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item xs={6}>
                <button>Register</button>
            </Grid>
            
        </Grid>
    </CardContent>
</Card>
</div>
)
}
export default UpcomingAuctions; 