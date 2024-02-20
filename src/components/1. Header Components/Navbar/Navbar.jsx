import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Hidden, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { name } from '../../../your_info';

const Navbar = () => {
  const { url } = name;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [ 'Habilidades','Proyectos', 'Sobre mi'];

  const renderHorizontalList = () => (
    <Box sx={{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center', // Centra los botones en la barra de navegación
      '& .MuiListItemButton-root': {
        mx: 2, // Aumenta el espacio entre los botones
      }
    }}>
      {menuItems.map((text, index) => (
        <ListItemButton key={text} sx={{ color: 'white', display: 'block' }} href={index === 4 ? url : `#${text.replace(' ', '')}`}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </Box>
  );

  const renderDrawerList = () => (
    <List>
      {menuItems.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={MuiLink} href={index === 4 ? url : `#${text.replace(' ', '')}`} sx={{ color: 'white', display: 'block' }}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      {/* Asumiendo que "Achievements" es un elemento adicional fuera de tu array menuItems */}
      <ListItem disablePadding>
        <ListItemButton component={MuiLink} href="#Proyectos" sx={{ color: 'white', display: 'block' }}>
          <ListItemText primary="Proyectos" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={MuiLink} href="#Habilidades" sx={{ color: 'white', display: 'block' }}>
          <ListItemText primary="Habilidades" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={MuiLink} href="#Sobremi" sx={{ color: 'white', display: 'block' }}>
          <ListItemText primary="Sobremi" />
        </ListItemButton>
      </ListItem>
    </List>
  );
  

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden lgDown implementation="css">
            {renderHorizontalList()}
          </Hidden>
          <Drawer
            anchor={'left'}
            open={isMenuOpen}
            onClose={toggleMenu}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
            >
              {renderDrawerList()}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
      {isMenuOpen && <Box sx={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />}
    </>
  );
};

export default Navbar;
