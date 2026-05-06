import React from 'react'
import { Card, Avatar, Typography } from '@mui/material'

export default function FacultyCard({name, image, profilePic, experience, subject}) {
  return (
    <Card
        sx={{
            width: 300,
            textAlign: 'center',
            p:3,
            backgroundColor: 'transparent',
            boxShadow: 'none'
        }}
    
    >
        <Avatar
        src={profilePic}
        alt={name}
        sx={{ width: 90, height: 90, margin: "auto", mb: 2 }}
      />

        <Typography variant='h4'
            sx={{
                fontSize: '1.5rem',
                fontWeight:550
            }}
        >
            {name}
        </Typography>

        <Typography variant='h6'
            sx={{fontWeight: 700, color: 'purple', fontSize: '.9rem'}}
        >
             {subject}
        </Typography>

        <Typography>

            {experience}+ years of experience

        </Typography>

    </Card>
  )
}
