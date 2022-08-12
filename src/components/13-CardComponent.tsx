import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material'
import React from 'react'

function CardComponent() {
  return (
    <Box width={'500px'}>
        <Typography variant='h3'>Card Component</Typography>
        <Card>
            <CardMedia component={'img'} height='140' image='https://source.unsplash.com/random'>

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                <Typography gutterBottom variant='body2' color={'text.secondary'}>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='text'>Share</Button>
                <Button variant='text'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default CardComponent