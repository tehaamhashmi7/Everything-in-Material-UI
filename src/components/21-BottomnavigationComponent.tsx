import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

function BottomnavigationComponent() {
  return (
    <BottomNavigation sx={{backgroundColor:'purple', width: '100%', position: 'absolute', bottom: 0}}>
        <BottomNavigationAction label='Home' icon={<HomeIcon />}/>
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon />}/>
        <BottomNavigationAction label='Profile' icon={<PersonIcon />}/>
    </BottomNavigation>
  )
}

export default BottomnavigationComponent