import { Box, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

function Ratings() {

    const [value, setValue] = useState<number | null>(null)
    console.log(value)

    const handleChange = (event: React.ChangeEvent<{}>, newVal: number | null ) => {
        setValue(newVal)
    }

  return (
    <Stack spacing={2}>
        <Typography variant='h3'>Rating Component</Typography>
        <Rating value={value} onChange={handleChange} precision={0.5}/>
    </Stack>
  )
}

export default Ratings