import React from 'react'
import Navbar from '../../components/common/Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import Footer from '../../components/common/Footer'
import PopularCourses from './PopularCourses'
import MeetOurFaculty from './MeetOurFaculty'

import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
        <Navbar/>

        <div className='mt-[60px]'>
            <HeroSection/>
        </div>
    
        <FeaturesSection/>
        <PopularCourses/>
        <MeetOurFaculty/>
        <Footer/>
    </Box>
  )
}
