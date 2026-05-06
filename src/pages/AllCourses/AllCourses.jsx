// src/pages/Courses/AllCourses.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, MenuItem, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CourseCard from '../../components/common/CourseCard';
import { coursesData } from '../../data/coursesData';

export default function AllCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('All');

  // Filter Logic
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === 'All' || course.classLevel === filterClass;
    return matchesSearch && matchesClass;
  });

  const uniqueClasses = ['All', ...new Set(coursesData.map(item => item.classLevel))];

  return (
    <Box sx={{ backgroundColor: '#f9fafb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Header Section */}
      <Box sx={{ 
        bgcolor: '#1e3a8a', 
        color: 'white', 
        pt: 15, 
        pb: 8, 
        textAlign: 'center',
        px: 2
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
            Explore Our Courses
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            Find the perfect course to accelerate your academic growth.
          </Typography>
        </Container>
      </Box>

      {/* Filters & Grid Section */}
      <Container maxWidth="lg" sx={{ py: 6, flexGrow: 1 }}>
        
        {/* Search and Filter Bar */}
        <Grid container spacing={2} sx={{ mb: 6 }} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={4}>
                 <Typography variant="h5" fontWeight="bold" color="text.primary">
                    Available Courses ({filteredCourses.length})
                 </Typography>
            </Grid>
            
            <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    {/* Search Field */}
                    <TextField
                        fullWidth
                        placeholder="Search for courses..."
                        variant="outlined"
                        size="small"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                            sx: { bgcolor: 'white' }
                        }}
                    />

                    {/* Class Dropdown */}
                    <TextField
                        select
                        value={filterClass}
                        onChange={(e) => setFilterClass(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 150, bgcolor: 'white' }}
                    >
                        {uniqueClasses.map((cls) => (
                            <MenuItem key={cls} value={cls}>
                                {cls}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Grid>
        </Grid>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
            <Grid container spacing={4}>
            {filteredCourses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                    <CourseCard course={course} />
                </Grid>
            ))}
            </Grid>
        ) : (
            <Box sx={{ textAlign: 'center', py: 10 }}>
                <Typography variant="h6" color="text.secondary">
                    No courses found matching your criteria.
                </Typography>
            </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
}