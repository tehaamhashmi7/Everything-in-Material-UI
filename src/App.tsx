import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './components/MuiTypography';
import { Button } from '@mui/material';
import Buttons from './components/2-Buttons';
import Textfield from './components/3-textfield';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <Buttons /> */}
      <Textfield />
    </div>
  );
}

export default App;
