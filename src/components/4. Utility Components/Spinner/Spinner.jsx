import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const Spinner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 6);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="page-loader"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        WELCOME
      </Typography>
      <CircularProgress variant="determinate" value={count} />
      <Typography variant="body1" component="div">
        {count}%
      </Typography>
    </Box>
  );
};

export default Spinner;
