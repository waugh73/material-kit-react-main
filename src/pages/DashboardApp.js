import React, {Component} from 'react';
import axios from 'axios';
import { Box, Grid, Card, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------




const url = "http://dataservice.accuweather.com/locations/v1/331472?apikey=sDfmagV85rDGs46FINwGp3rWTMVqUyeQ";
const url2 = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/331472?apikey=sDfmagV85rDGs46FINwGp3rWTMVqUyeQ";
const url3 = "http://dataservice.accuweather.com/currentconditions/v1/331472?apikey=sDfmagV85rDGs46FINwGp3rWTMVqUyeQ";
const url4 = "http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='115135'"

class dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = { 

      LocalizedName: [],
     
    };
    this.state = { 

      Text: [],
     
    };

    this.state = { 
      
     Value: [],
     
    };
    this.state = { 
      
      Value: [],
      
     };


     this.state = { 
      
      hr: [],
      rbi: [],
      r: [],
      sb: [],
     };
      
    }
    

    componentDidMount() {


      axios(url)
      .then(result => {
        console.log(result.data);  
        this.setState({
           Cityname: result.data.LocalizedName,
       
          })
        })



      axios(url2)
        .then(result => {
          console.log(result.data);  
          this.setState({
             Headliner: result.data.Headline.Text,
             Temphigh : result.data.DailyForecasts[0].Temperature.Maximum.Value
            })
          })
  

        
     axios(url3)
        .then(result => {
          console.log(result.data);  
          this.setState({
            CurrentTemp: result.data[0].Temperature.Imperial.Value
            })
          })
        
       
  
 
          axios(url4)
          .then(result => {
            console.log(result.data);  
            this.setState({
              Homerun: result.data.sport_career_hitting.queryResults.row.hr,
              Rbi: result.data.sport_career_hitting.queryResults.row.rbi,
              Runs: result.data.sport_career_hitting.queryResults.row.r,
              Stolenbase: result.data.sport_career_hitting.queryResults.row.sb,
              })
            })       

          
    
            };
      


render() 
{

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>

            <h2> {this.state.Cityname}</h2>
            <p>City: {this.state.Headliner}</p>
            <p>High for the day: {this.state.Temphigh} </p>
            <p>Current Temperature: {this.state.CurrentTemp} </p>
            

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
          <h2>Ken Griffey Jr.</h2>
          <p>Home Runs: {this.state.Homerun} </p>
          <p>Rbi: {this.state.Rbi} </p>
          <p>Runs: {this.state.Runs} </p>
          <p>Stolen Bases: {this.state.Stolenbase} </p>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
}
 

export default dashboard ;