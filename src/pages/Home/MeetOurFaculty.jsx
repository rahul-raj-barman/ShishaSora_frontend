import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import FacultyCard from './FacultyCard'
import { facultyData } from '../../data/facultyData'

export default function MeetOurFaculty() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      
  
      <Typography variant="h4" sx={{ fontSize: "2rem",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "1px",
    mb:4 }}>
        Meet Our Faculty
      </Typography>

   
      <Grid container spacing={4} justifyContent="center">
        {facultyData.map((faculty) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={faculty.id}
          >
            <FacultyCard
              profilePic={faculty.profilePic}
              name={faculty.name}
              subject={faculty.subject}
              experience={faculty.experience}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
