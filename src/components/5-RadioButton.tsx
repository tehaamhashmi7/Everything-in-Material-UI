import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";

function RadioButton() {
  const [yoe, setYoe] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoe(e.target.value);
    console.log(yoe);
  };

  return (
    <Box>
      <Typography variant="h3">Radio Buttons</Typography>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio color='secondary'/>} label="0-2" value={"0-2"} />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio color='success'/>} label="6-10" value={"6-10"}/>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioButton;
