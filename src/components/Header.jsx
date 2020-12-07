import mainLogo from '../images/logo.png'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.css';



export default function () {
  return (
    <>
      <CssBaseline />
      <AppBar style={{ background: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <img className="App-logo" src={mainLogo} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
