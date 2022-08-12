import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

function AccordionComponent() {

    const [expanded, setExpanded] = useState<String | false>(false)

  return (
    <Box>
      <Typography variant="h4">Accordion</Typography>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3] for building user interfaces based
            on UI components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3] for building user interfaces based
            on UI components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3] for building user interfaces based
            on UI components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default AccordionComponent;
