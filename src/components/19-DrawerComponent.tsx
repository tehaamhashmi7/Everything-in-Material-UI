import { Box, Button, Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'

function DrawerComponent() {
    const [isDrawerOpen, setDrawer] = useState(false)
  return (
    <Box>
        <Typography variant='h5'>Drawer</Typography>
        <Button variant='contained' onClick={() => setDrawer(!isDrawerOpen)}>Open Drawer</Button>
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setDrawer(false)}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6'>Drawer</Typography>
            </Box>
        </Drawer>
    </Box>
  )
}

export default DrawerComponent