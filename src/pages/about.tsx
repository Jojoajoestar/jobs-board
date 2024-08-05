/**
 * AboutPage Component
 *
 * This component renders the About Us page.
 * It provides information about the IT Jobs platform.
 *
 * Example:
 * <AboutPage />
 */

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <main>
        <StyledContainer maxWidth="md">
          <StyledPaper elevation={3}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to IT Jobs, your number one source for all things IT. We are dedicated to providing you the best of job listings, with a focus on dependability, customer service, and uniqueness.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Founded in 2023, IT Jobs has come a long way from its beginnings. When we first started out, our passion for helping people find their dream job drove us to start our own business.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We hope you enjoy our job listings as much as we enjoy offering them to you. If you have any questions or comments, please do not hesitate to contact us.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sincerely, The IT Jobs Team
            </Typography>
          </StyledPaper>
        </StyledContainer>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
