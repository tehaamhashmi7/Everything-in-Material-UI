import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function LinksTag() {
  return (
    <Stack direction={"column"} spacing={2} p={4}>
      <Typography variant="h4">Link Tag</Typography>
      <Stack direction={"row"} spacing={2} m={4}>
        <Link href="#">Home</Link>
        <Link href="#" color={"secondary"} variant="h5">
          About
        </Link>
        <Link href="#" underline="hover">
          Component
        </Link>
      </Stack>
    </Stack>
  );
}

export default LinksTag;
