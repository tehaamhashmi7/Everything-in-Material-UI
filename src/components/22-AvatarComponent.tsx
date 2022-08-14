import { Avatar, AvatarGroup, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function AvatarComponent() {
  return (
    <Stack spacing={4}>
      <Typography variant="h3">Avatar Component</Typography>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "primary.light", width: 96, height: 96 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="square"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default AvatarComponent;
