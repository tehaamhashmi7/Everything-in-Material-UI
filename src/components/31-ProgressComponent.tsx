import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

function ProgressComponent() {
  return (
    <Stack spacing={2}>
        <CircularProgress variant='determinate' value={30} />
        <LinearProgress variant='determinate' value={30}/>
    </Stack>
  )
}

export default ProgressComponent