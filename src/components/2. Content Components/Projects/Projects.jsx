import React from 'react';
import { projectData } from '../../../your_info';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, Box, Container } from '@mui/material';

const Projects = () => {
  const renderDemoContent = (project) => {
    if (isImageURL(project.demoUrl)) {
      return (
        <CardMedia
          component="img"
          image={project.demoUrl}
          alt="Project Thumbnail"
          sx={{ height: 200, maxWidth: '100%', objectFit: 'contain' }}
        />
      );
    } else {
      return (
        <iframe
          src={project.demoUrl}
          title="Project Demo"
          frameBorder="0"
          allowFullScreen
          sx={{ width: '100%', height: 200 }}
        />
      );
    }
  };

  const isImageURL = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some((extension) => url.toLowerCase().endsWith(extension));
  };

  return (
    <Box sx={{ py: 8 }} id="Proyectos">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
            Proyectos
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {renderDemoContent(project)}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.githubUrl} target="_blank">
                    Visitar Sitio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
