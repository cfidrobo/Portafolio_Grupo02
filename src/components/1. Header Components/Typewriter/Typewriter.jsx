import React, { useState, useEffect, useMemo } from 'react';
import { Typography } from '@mui/material';
import { typeWriterText } from '../../../your_info';

const typingSpeed = 150;
const backspaceSpeed = 50;

function Typewriter() {
  const [skill, setSkill] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isDeleting) {
        setSkill((prevSkill) => prevSkill.substring(0, prevSkill.length - 1));
        if (skill === '') {
          setIsDeleting(false);
          setIsFullyDisplayed(false);
        }
      } else {
        const nextSkill = typeWriterText[index];
        setSkill((prevSkill) => nextSkill.substring(0, prevSkill.length + 1));
        if (skill === nextSkill) {
          setIsFullyDisplayed(true);
          setTimeout(() => {
            setIsDeleting(true);
            setTimeout(() => {
              setIsFullyDisplayed(false);
              setIndex((index + 1) % typeWriterText.length);
            }, 500);
          }, 1000);
        }
      }
    }, isFullyDisplayed ? backspaceSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [skill, isDeleting, index, isFullyDisplayed]);

  const blinkingCursor = useMemo(() => {
    return isFullyDisplayed ? '' : '|';
  }, [isFullyDisplayed]);

  return (
    <Typography variant="h6" component="p" sx={{
      display: 'inline',
      fontFamily: 'monospace',
      whiteSpace: 'pre',
      '&::after': {
        content: `"${blinkingCursor}"`,
        animation: 'blink 1s step-start infinite',
        '@keyframes blink': {
          '50%': { opacity: 0 },
        },
      },
    }}>
      {skill}
    </Typography>
  );
}

export default Typewriter;
