import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Zoom } from '@mui/material';

// Import your images
import javaImage from '../../img/logos-skills/java.png';
import reactImage from '../../img/logos-skills/react.png';
import pythonImage from '../../img/logos-skills/python.png';
import JavaScriptImage from '../../img/logos-skills/JavaScript.png';
import phpImage from '../../img/logos-skills/php.png';
import htmlImage from '../../img/logos-skills/html.png';
import cssImage from '../../img/logos-skills/CSS.png';
import bootstrapImage from '../../img/logos-skills/bootstrap.png';
import jqueryImage from '../../img/logos-skills/jquery.png';
import postgresqlImage from '../../img/logos-skills/postgresql.png';
import oracleImage from '../../img/logos-skills/oracle-logo.png';
import firebaseImage from '../../img/logos-skills/firebase.png';
import dockerImage from '../../img/logos-skills/docker.png';
import githubImage from '../../img/logos-skills/git-icon.png';
import supabaseImage from '../../img/logos-skills/supabase.png';
import netImage from '../../img/logos-skills/net.png';





// Continue importing the rest of your images

// Create an array of objects for your skills, including the imported image and any other relevant data
const skills = [
  { title: 'Java', image: javaImage },
  { title: 'React', image: reactImage },
  { title: 'Python', image: pythonImage },
    { title: 'JavaScript', image: JavaScriptImage },
    { title: 'PHP', image: phpImage },
    { title: 'HTML', image: htmlImage },
    { title: 'CSS', image: cssImage },
    { title: 'Bootstrap', image: bootstrapImage },
    { title: 'jQuery', image: jqueryImage },
    { title: 'PostgreSQL', image: postgresqlImage },
    { title: 'Oracle', image: oracleImage },
    { title: 'Firebase', image: firebaseImage },
    { title: 'Docker', image: dockerImage },
    { title: 'GitHub', image: githubImage },
    { title: 'Supabase', image: supabaseImage },
    { title: '.NET ', image: netImage },
    

  // Add the rest of your skills here
];

const ExperienceItem = ({ title, company, timeFrame, bulletPoints }) => (
    <Box mb={2}>
      <Typography variant="h6" component="h6" sx={{ textAlign: 'justify' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ textAlign: 'justify' }}>
        {company}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" sx={{ textAlign: 'justify' }}>
        {timeFrame}
      </Typography>
      <ul sx={{ paddingLeft: 0, textAlign: 'left', listStyleType: 'none' }}>
        {bulletPoints.map((point, index) => (
          <li key={index} sx={{ textAlign: 'left' }}>
            <Typography variant="body2">{point}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
  
const Skillz = () => {
  return (
    <Box id="Habilidades" component="section" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4}>

          {/* Skills Section - Left Side */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3" gutterBottom>
              Habilidades
            </Typography>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={6} lg={3} key={index}>
                  <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                      <CardContent>
                        <Box
                          component="img"
                          src={skill.image}
                          alt={skill.title}
                          sx={{ width: 100, height: 100, marginBottom: 2 }}
                        />
                        <Typography variant="h6" component="p">
                          {skill.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Grid>
   {/* Experience & Formation Section - Right Side */}
   <Grid item xs={12} md={6}>
            <Box textAlign="center" mb={5}>
              <Typography variant="h3" component="h3" gutterBottom>
                Experiencia Laboral
              </Typography>
              {/* Experience Items */}
              <ExperienceItem
                title="Proyectos de Consultoría en Seguridad de la Información y Ciberseguridad"
                company="GreenCloud | Enero 2023 - Septiembre 2023"
                bulletPoints={[
                  "Proyecto con PWC - Telefónica",
                  "Proyecto de Seguridad con Silverfort",
                  "Visitador Técnico para Bomberos de Quito"
                ]}
              />
              <br />
              <br />
              <ExperienceItem
                title="Asistencia Técnica para el Fortalecimiento de Emprendimientos de Personas Refugiadas, Solicitantes de Asilo y Personas de Interés de ACNUR y en Situación de Vulnerabilidad"
                company="Proyecto de Vinculación | Septiembre 2023 - Octubre 2023"
                bulletPoints={[
                  "Cargo: Co-líder en el Departamento de Levantamiento de Información.",
                  "Duración: 96 horas"
                ]}
              />
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Skillz;
