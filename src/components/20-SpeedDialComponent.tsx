import {
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

function SpeedDialComponent() {
  return (
    <Box>
      <Typography variant="h3">Speed Dial Component</Typography>
      <SpeedDial
        ariaLabel="Navigation Speed Dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="copy" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
        <SpeedDialAction
          icon={<MobileScreenShareIcon />}
          tooltipTitle="share"
        />
      </SpeedDial>
    </Box>
  );
}

export default SpeedDialComponent;
