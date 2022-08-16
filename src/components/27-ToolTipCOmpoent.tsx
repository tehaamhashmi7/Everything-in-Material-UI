import { Tooltip, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ToolTipCOmpoent() {
  return (
    <Tooltip title="Delete" placement='right' arrow enterDelay={500} leaveDelay={300}>
    <IconButton>
        <DeleteIcon />
    </IconButton>
    </Tooltip> 
  )
}

export default ToolTipCOmpoent