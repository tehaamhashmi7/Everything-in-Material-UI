import { Box, Button, Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

function SkeletonComponent() {

    const [loading, setLoading] = useState(true)

    const handleClick = () => {
        setLoading(!loading)
    }

  return (
    // <Stack spacing={1} p={2} width={'250px'}>
    //     <Skeleton variant='text'/>
    //     <Skeleton variant='circular' width={40} height={40}/>
    //     <Skeleton variant='rectangular' width={100} height={100} animation='wave'/>
    // </Stack>

    <Box sx={{'width': '250px'}}>
        <Button variant='contained' onClick={handleClick}>Toggle Image</Button>
        {loading ? <Skeleton variant='rectangular' width={256} height={144} animation='wave'/> : <img src='https://metricool.com/wp-content/uploads/right-youtube-dimension-1024x576.jpg' alt='img'/>}
    </Box>
  )
}

export default SkeletonComponent