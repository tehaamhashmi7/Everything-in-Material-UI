import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './components/MuiTypography';
import { Button } from '@mui/material';
import Buttons from './components/2-Buttons';
import Textfield from './components/3-textfield';
import SelectComponent from './components/4-SelectComponent';
import RadioButton from './components/5-RadioButton';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <Buttons /> */}
      {/* <Textfield /> */}
      {/* <SelectComponent /> */}
      <RadioButton />
    </div>
  );
}

export default App;
