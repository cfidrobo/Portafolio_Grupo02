import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Container, Grid, Typography, Box, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { achievements } from '../../../your_info';

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Box id="Sobremi" sx={{ py: 8, backgroundColor: 'black' }}>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={10}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Acerca de Cristian Idrobo
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'white' }}>
                Sobre mí
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                Estudiante de 6to nivel en Ingeniería en Tecnologías de la Información de la Universidad de las Fuerzas Armadas ESPE, en busca de poner en práctica los conocimientos adquiridos y seguir aprendiendo.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'white' }}>
                Contacto
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} size="lg" style={{ marginRight: '8px', color: 'white' }} />
                <Typography variant="body1" sx={{ color: 'white' }}>
                  0992903803
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: '8px', color: 'white' }} />
                <Typography variant="body1" sx={{ color: 'white' }}>
                  cristianidrobo97@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2} ref={ref}>
              {achievements.map((info, index) => (
                <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
                  <Box sx={{ textAlign: 'center', visibility: isVisible ? 'visible' : 'hidden' }}>
                    <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                      <CountUp start={0} end={info.value} duration={4} separator="," />
                      <span>{info.unit}</span>
                    </Typography>
                    <Typography variant="body1">{info.word}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievement;
