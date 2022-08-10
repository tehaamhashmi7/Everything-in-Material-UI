import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component={'h1'} gutterBottom={true}>H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
        mollitia! Vel rerum dolores aperiam ducimus, non, perspiciatis eaque
        temporibus reiciendis ratione deleniti minus iusto numquam ex animi hic
        itaque doloribus!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa culpa
        assumenda placeat deleniti cupiditate sint commodi sunt minima
        exercitationem perferendis illo voluptate error tempore recusandae ea,
        odio nemo illum ipsam.
      </Typography>
    </div>
  );
}

export default MuiTypography;
