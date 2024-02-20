import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { emailConfig } from '../../../your_info';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const ContactMe = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, userID } = emailConfig;

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Box id="ContactMe" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: '100%' },
            '& .MuiButton-root': { mt: 2 },
          }}
        >
          <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
            <Typography variant="h5" gutterBottom>Contact Me</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Feel free to contact me if you like to reach out or have any questions.
            </Typography>
            <TextField label="Name" name="user_name" required />
            <TextField label="Email" name="user_email" type="email" required />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              required
            />
            {!isMessageSent ? (
              <Button type="submit" variant="contained">Send</Button>
            ) : (
              <Box textAlign="center" sx={{ mt: 2 }}>
                <Typography variant="h6" component="div">
                  Message Sent Successfully!
                </Typography>
                <Typography variant="body1">
                  Thank you for contacting me.
                </Typography>
              </Box>
            )}
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
