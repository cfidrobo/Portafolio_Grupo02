import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Crear un tema personalizado con fondo negro y texto blanco.
const theme = createTheme({
  palette: {
    mode: 'dark', // Utiliza el modo oscuro predefinido que ajusta los colores de fondo y de texto.
    // Alternativamente, puedes definir colores específicos así:
     background: {
       default: '#000' // Color de fondo negro
     },
     text: {
       primary: '#fff' // Color de texto blanco
     }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Asegura que los estilos del tema se apliquen de manera uniforme */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
