import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Divider,
} from "@mui/material";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function ListComponent() {
  return (
    <Box>
      <Typography variant="h3">List Component</Typography>
      <Box m={10} sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <AccessAlarmIcon />
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "success.light" }}>
                <AccessAlarmIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemText primary="List Item 3" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default ListComponent;
