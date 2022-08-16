import { Stack } from '@mui/material'
import React from 'react'
import {LoadingButton} from '@mui/lab'

function LoadingButtonComponent() {
  return (
    <Stack spacing={2} direction={'row'} p={2}>
        <LoadingButton loading variant='contained'>Submit</LoadingButton>
    </Stack>
  )
}

export default LoadingButtonComponent