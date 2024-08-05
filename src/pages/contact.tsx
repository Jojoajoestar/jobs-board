/**
 * ContactPage Component
 *
 * This component renders the Contact Us page.
 * It provides a form for users to submit their questions or comments.
 *
 * Example:
 * <ContactPage />
 */

import React from 'react';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  flex: 1,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const ContactPage: React.FC = () => {
  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Contact form submitted');
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Have questions or comments? We would love to hear from you. Please fill out the form below, and we will get in touch with you as soon as possible.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} mt={3}>
            <TextField label="Name" fullWidth required variant="outlined" margin="normal" />
            <TextField label="Email" fullWidth required variant="outlined" margin="normal" type="email" />
            <TextField label="Message" fullWidth required variant="outlined" margin="normal" multiline rows={4} />
            <Box mt={2} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default ContactPage;
