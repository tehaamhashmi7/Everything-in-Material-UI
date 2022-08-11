import React, { useState } from "react";
import { Box, TextField, MenuItem, Typography } from "@mui/material";

function SelectComponent() {
  const [countries, setCountry] = useState<string[]>([]);

  const [lang, setLang] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountry(typeof value === 'string' ? value.split(',') : value);
  };

  const handleLang = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(lang)
    const value = event.target.value
    setLang(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box width={"250px"}>
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{multiple:true}}>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      <TextField label="Select Technology" select fullWidth onChange={handleLang} SelectProps={{multiple:true}} value={lang}>
        <MenuItem value="Node">Node</MenuItem>
        <MenuItem value="PHP">PHP</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
      </TextField>
      <Typography variant="h5">{lang}</Typography>
    </Box>
  );
}

export default SelectComponent;
