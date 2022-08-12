import { Grid, Box, Paper } from '@mui/material'
import React from 'react'

function GridComponent() {
  return (
    <Paper sx={{padding: '32px'}} elevation={4}>
    <Grid container>
        <Grid item xs={3}><Box bgcolor='primary.light' p={2}>item-1</Box></Grid>
        <Grid item xs={9}><Box bgcolor='primary.light' p={2}>item-2</Box></Grid>
        <Grid item xs={9}><Box bgcolor='primary.light' p={2}>item-3</Box></Grid>
        <Grid item xs={3}><Box bgcolor='primary.light' p={2}>item-4</Box></Grid>
    </Grid>
    </Paper>
  )
}

export default GridComponent