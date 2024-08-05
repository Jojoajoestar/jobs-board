/**
 * AdvertisersPage Component
 *
 * This component renders the Advertisers page.
 * It provides information on advertising opportunities with the IT Jobs platform.
 *
 * Example:
 * <AdvertisersPage />
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

const AdvertisersPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Advertisers</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Advertisers
          </Typography>
          <Typography variant="body1" gutterBottom>
            At IT Jobs, we offer a variety of advertising opportunities to help you reach our engaged audience of IT professionals and job seekers.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Why Advertise with Us?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our platform attracts a dedicated audience of individuals interested in the IT industry. Whether you are looking to promote job listings, products, or services, we can help you connect with the right audience.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Advertising Options
          </Typography>
          <Typography variant="body1" gutterBottom>
            We offer several advertising options, including banner ads, sponsored posts, and newsletter sponsorships. Custom packages are also available to meet your specific needs.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Interested in advertising with IT Jobs? Contact us at <a href="mailto:advertising@itjobs.com">advertising@itjobs.com</a> for more information and to get started.
          </Typography>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default AdvertisersPage;
