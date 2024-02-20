import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import ContactMe from '../ContactMe/ContactMe';
import { aboutMeText } from '../../../your_info';

const AboutMe = () => {
  const { infotext, power_slogan } = aboutMeText;
  return (
    <Box component="section" id="AboutMe" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={6} md={12}>
            <Box>
              <Typography variant="h4" component="h2" gutterBottom sx={{ animation: 'fadeInUp 0.2s' }}>
                About me:
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" paragraph sx={{ animation: 'fadeInUp 0.4s' }}>
                {infotext}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                {power_slogan}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={12}>
            <Box>
              <ContactMe />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
