import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { name, socialProfiles } from '../../../your_info';
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import codingImage from '../../img/code1.png';

const Hero = () => {
  const { firstname, lastname } = name;

  return (
    <Box
      id="Home"
      sx={{
        backgroundImage: `url(${codingImage})`,
        backgroundSize: 'cover',
        color: '#fff',
      }}
    >
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
              {firstname} {lastname}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typewriter />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* LinkedIn Button */}
            <Button
              variant="contained"
              href="https://www.linkedin.com/in/cristian-idrobo-montalvo-64a10b295/"
              sx={{ mx: 1, background: 'white', boxShadow: 'none', '&:hover': { background: 'rgba(255,255,255,0.2)' } }}
              startIcon={<i className="icon fa-linkedin"></i>}
            >
              LinkedIn
            </Button>
            {/* CV Button */}
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1ycD33ao8z5UZKT40tfU458zSwjSKL9Wl/view?usp=sharing"
              sx={{ mx: 1, background: 'white', boxShadow: 'none', '&:hover': { background: 'rgba(255,255,255,0.2)' } }}
            >
              CV
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
