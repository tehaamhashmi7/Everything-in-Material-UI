import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MasonryComponet() {
  const heights = [
    150, 30, 50, 60, 40, 110, 20, 120, 70, 90, 170, 130, 10, 140, 190,
  ];

  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => {
          return (
            <Paper
              key={index}
              sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height,
                border: "1px solid",
              }}
            >
              {index + 1}
              <Accordion sx={{minHeight: height}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary"/>}>
                        <Typography>Accordion {index+1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          );
        })}
      </Masonry>
    </Box>
  );
}

export default MasonryComponet;
