import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";

function Checkboxx() {
  const [accept, setAcccept] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);

  const handleAccept = () => {
    setAcccept(!accept);
    console.log(accept);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (skills.includes(e.target.value)) {
      const newArr = skills.filter((skill) => {
        if (skill !== e.target.value) {
          return skill;
        }
      });
      setSkills(newArr);
    } else {
      setSkills(skills.concat(e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h3">Checkbox component</Typography>

        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox
              onChange={handleAccept}
              color="success"
              checked={accept}
            />
          }
        />

        <Typography variant="h5">{accept ? "true" : "false"}</Typography>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value={"HTML"}
              control={<Checkbox onChange={handleLanguage} />}
            />
            <FormControlLabel
              label="CSS"
              value={"CSS"}
              control={<Checkbox onChange={handleLanguage} />}
            />
            <FormControlLabel
              label="JavaScript"
              value={"JavaScript"}
              control={<Checkbox onChange={handleLanguage} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Checkboxx;
