import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from '@mui/material'

function NavbarComp() {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}>Pokemon App</Typography>
            <Stack direction='row' spacing={2}>
                <Button variant='text' color='inherit'>Features</Button>
                <Button variant='text' color='inherit'>Pricing</Button>
                <Button variant='text' color='inherit'>About</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default NavbarComp