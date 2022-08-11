import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

function Switches() {
  const [dark, setDark] = useState(true);
  console.log(dark);

  return (
    <Box>
      <Typography variant="h2">Switch Component</Typography>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={dark} onChange={() => setDark(!dark)} />}
      />
    </Box>
  );
}

export default Switches;
