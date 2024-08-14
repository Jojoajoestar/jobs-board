/**
 * TermsOfServicePage Component
 *
 * This component renders the Terms of Service page.
 * It provides information on the terms and conditions for using the IT Jobs platform.
 *
 * Example:
 * <TermsOfServicePage />
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

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to IT Jobs. These terms and conditions outline the rules and regulations for the use of our Website.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Acceptance of the Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use IT Jobs website if you do not accept all of the terms and conditions stated on this page.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Changes to the Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Accessing the Website
          </Typography>
          <Typography variant="body1" gutterBottom>
            We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice.
          </Typography>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
