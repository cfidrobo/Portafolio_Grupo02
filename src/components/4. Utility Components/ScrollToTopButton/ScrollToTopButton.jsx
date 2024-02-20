import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTopButton;
