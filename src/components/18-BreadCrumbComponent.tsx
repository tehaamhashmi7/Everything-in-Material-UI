import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";

function BreadCrumbComponent() {
  return (
    <Box m={2}>
      <Typography variant="h6">Bread Crumbs</Typography>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default BreadCrumbComponent;
