import { Directions } from '@mui/icons-material'
import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'

function StackComponent() {
  return (
    <Stack sx={{
        border: '2px solid red'
        
    }}
    direction='row'
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    p={4}
    >
        <Typography variant='h5'>Line 1</Typography>
        <Typography variant='h5'>Line 2</Typography>
    </Stack>
  )
}

export default StackComponent