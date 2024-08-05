/**
 * GuidelinesPage Component
 *
 * This component renders the Community Guidelines page.
 * It provides information on the rules and expectations for the IT Jobs community.
 *
 * Example:
 * <GuidelinesPage />
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

const GuidelinesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guidelines | IT Jobs</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Community Guidelines
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to IT Jobs. Our community is built on mutual respect, collaboration, and professionalism. To maintain a positive and productive environment, we ask that all users adhere to the following guidelines.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Be Respectful
          </Typography>
          <Typography variant="body1" gutterBottom>
            Treat others with respect and courtesy. Discrimination, harassment, and abusive behavior will not be tolerated.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Stay On Topic
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ensure your posts and comments are relevant to the topic at hand. Off-topic content may be removed to keep discussions focused.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Protect Privacy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Do not share personal information about yourself or others. Respect the privacy of all community members.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Follow the Law
          </Typography>
          <Typography variant="body1" gutterBottom>
            Do not engage in or encourage illegal activities. This includes sharing pirated software, engaging in fraud, or any other unlawful conduct.
          </Typography>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default GuidelinesPage;
