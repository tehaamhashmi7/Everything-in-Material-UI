import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Autocompleted() {
  const [value, setVal] = useState<string | null>(null);
  console.log(value);

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <Stack spacing={2} width={"250px"}>
      <Typography variant="h3">Autocomplete</Typography>
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField
            {...params}
            value={value}
            label={"skills"}
            onChange={(_event: React.ChangeEvent<HTMLInputElement>) =>
              setVal(_event.target.value)
            }
          />
        )}
      />
      <Typography variant="h5">{value}</Typography>
    </Stack>
  );
}

export default Autocompleted;
