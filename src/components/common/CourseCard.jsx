// src/components/common/CourseCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Box, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Install icons if missing: npm install @mui/icons-material

export default function CourseCard({ course }) {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          sx={{ height: 180 }}
          image={course.image}
          title={course.title}
        />
        <Chip 
          label={course.classLevel} 
          size="small" 
          color="primary" 
          sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12, 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            color: '#1e3a8a',
            fontWeight: 'bold'
          }} 
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          fontWeight="bold"
          sx={{ color: '#1e3a8a', lineHeight: 1.2, mb: 1 }}
        >
          {course.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {course.description}
        </Typography>

        {/* Optional: Add tags or meta info */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="caption">6 Months Duration</Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          {course.price}
        </Typography>
        <Button 
          variant="contained" 
          size="small"
          sx={{ 
            bgcolor: '#facc15', 
            color: 'black',
            fontWeight: 600,
            '&:hover': { bgcolor: '#eab308' }
          }}
        >
          Enroll Now
        </Button>
      </CardActions>
    </Card>
  );
}