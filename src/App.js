import './App.css';
import './components/Header';
import Header from './components/Header';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import phone from "./images/phone.png";
import email from "./images/email.png";
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <div>
                <img src={phone} alt="phone" width="90" />
                <div>
                  <Button variant="contained" color="primary" href="tel:02870342281">
                    call us now!
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <img src={email} alt="mail" width="90" />
              <div>
                <Button variant="contained" color="primary" href="mailto:rhkdavidson@aol.com">
                  rhkdavidson@aol.com
              </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
