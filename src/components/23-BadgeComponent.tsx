import { Badge, Stack, Typography } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';

function BadgeComponent() {
  return (
    <Stack>
        <Typography variant="h3">Badge Component</Typography>
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color='primary'>
                <MailIcon />
            </Badge>
        </Stack>
    </Stack>
  )
}

export default BadgeComponent