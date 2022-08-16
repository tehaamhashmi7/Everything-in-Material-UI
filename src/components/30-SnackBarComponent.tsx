import { Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

function SnackBarComponent() {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Button onClick={() => setOpen(!open)}>Submit</Button>
        <Snackbar message='Form Submitted Successfully!' autoHideDuration={4000} open={open} onClose={() => setOpen(false)}/>
    </>
  )
}

export default SnackBarComponent