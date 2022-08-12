import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './components/MuiTypography';
import { Button, Switch } from '@mui/material';
import Buttons from './components/2-Buttons';
import Textfield from './components/3-textfield';
import SelectComponent from './components/4-SelectComponent';
import RadioButton from './components/5-RadioButton';
import Checkboxx from './components/6-checkboxx';
import Switches from './components/7-Switches';
import Ratings from './components/8-Ratings';
import Autocompleted from './components/9-Autocomplete';
import BoxComponent from './components/10-BoxComponent';
import StackComponent from './components/11-StackComponent';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <Buttons /> */}
      {/* <Textfield /> */}
      {/* <SelectComponent /> */}
      {/* <RadioButton /> */}
      {/* <Checkboxx /> */}
      {/* <Switches /> */}
      {/* <Ratings /> */}
      {/* <Autocompleted /> */}
      {/* <BoxComponent /> */}
      <StackComponent />
    </div> 
  );
}

export default App;
