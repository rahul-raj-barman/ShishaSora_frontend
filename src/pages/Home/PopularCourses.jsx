import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'
import { coursesData } from '../../data/coursesData'

export default function () {
  return (
    <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h4'
            sx={{mb: 4, fontWeight: 700}}
        >
            Our Popular Courses
        </Typography>
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3, md: 5 },
            justifyContent: 'center'
        }}
    >
        {
            coursesData.map((e) => <Card id={e.id} image={e.image} subject={e.subject} desc={e.description} price={e.price}/>)
        }
        
    </Box>
    </Box>
  )
}
