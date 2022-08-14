import React, { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

function NavbarComp() {
  const [anchorMenu, setMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorMenu);

  return (
    <Stack direction={"row"} spacing={2}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Pokemon App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="text" color="inherit">
              Features
            </Button>
            <Button variant="text" color="inherit">
              Pricing
            </Button>
            <Button
              id="resource-button"
              variant="text"
              color="inherit"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setMenu(e.currentTarget)
              }
              aria-controls={open ? "resource-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={
                open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
              }
            >
              About
            </Button>
          </Stack>
          <Menu
            open={open}
            id="resource-menu"
            anchorEl={anchorMenu}
            MenuListProps={{ "aria-labelledby": "resource-button" }}
            onClose={() => setMenu(null)}
          >
            <MenuItem onClick={() => setMenu(null)}>Blog</MenuItem>
            <MenuItem onClick={() => setMenu(null)}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}

export default NavbarComp;
