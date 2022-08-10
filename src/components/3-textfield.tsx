import React, { useState } from "react";
import {
  Stack,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Textfield() {
  const [showPassword, setShow] = useState(false);

  const [password, setPassword] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="First Name" variant="outlined" />
        <TextField label="First Name" variant="filled" />
        <TextField label="First Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          required
        />

        <TextField
          label="Password"
          size="small"
          type={showPassword ? "text" : "password"}
          value={password}
          color="secondary"
          helperText={password ? "Do not share your password" : ""}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: showPassword ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <VisibilityOffIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Textfield;
