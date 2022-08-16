import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

function AlertComponent() {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>This an error alert</Alert>
        <Alert severity='warning'>This an warning alert</Alert>
        <Alert severity='info'>This an info alert</Alert>
        <Alert severity='success'>This an success alert</Alert>

        <Alert variant='outlined' severity='error' onClose={() => alert('Close Alert')}>
            <AlertTitle>Error</AlertTitle>
            This an error alert</Alert>
        <Alert variant='outlined' severity='warning'>This an warning alert</Alert>
        <Alert variant='outlined' severity='info'>This an info alert</Alert>
        <Alert variant='outlined' severity='success'>This an success alert</Alert>

        <Alert variant='filled' severity='error'>This an error alert</Alert>
        <Alert variant='filled' severity='warning'>This an warning alert</Alert>
        <Alert variant='filled' severity='info'>This an info alert</Alert>
        <Alert variant='filled' severity='success'>This an success alert</Alert>
    </Stack>
  )
}

export default AlertComponent