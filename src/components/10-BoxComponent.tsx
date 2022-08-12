import { Box } from '@mui/material'
import React from 'react'

function BoxComponent() {
  return (
    <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'secondary.light'
        },
    }}>BoxComponent</Box>
  )
}

export default BoxComponent