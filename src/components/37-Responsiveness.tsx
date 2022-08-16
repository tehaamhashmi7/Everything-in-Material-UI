import { Box } from '@mui/material'
import React from 'react'

function Responsiveness() {
  return (
    <Box m={4} sx={{'height': '300px', 'width': {
        xs: 100,
        sm: 200,
        md: 300,
        lg: 400,
        xl: 500
    }, 'backgroundColor': 'primary.main'}}></Box>
  )
}

export default Responsiveness