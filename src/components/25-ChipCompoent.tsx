import { Avatar, Chip, Stack } from '@mui/material'
import React from 'react'
import FaceIcon from '@mui/icons-material/Face';

function ChipCompoent() {
  return (
    <Stack direction={'row'} spacing={1}>
        <Chip label="chip" color='primary' size='small' icon={<FaceIcon />}/>
        <Chip label="outline chip" color='secondary' variant='outlined' avatar={<Avatar>T</Avatar>}/>
    </Stack>
  )
}

export default ChipCompoent