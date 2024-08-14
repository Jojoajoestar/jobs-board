/**
 * PrivacyPolicyPage Component
 *
 * This component renders the Privacy Policy page.
 * It provides information on the privacy practices of the IT Jobs platform.
 *
 * Example:
 * <PrivacyPolicyPage />
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

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | IT Jobs</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <main>
        <StyledContainer maxWidth="md">
          <StyledPaper elevation={3}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="body1" gutterBottom>
              At IT Jobs, we respect your privacy and are committed to protecting it through our compliance with this policy.
            </Typography>
            <Typography variant="body1" gutterBottom>
              This policy describes the types of information we may collect from you or that you may provide when you visit the website IT Jobs and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Information We Collect
            </Typography>
            <Typography variant="body1" gutterBottom>
              We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number.
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              How We Use Your Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              We use information that we collect about you or that you provide to us, including any personal information, to present our Website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.
            </Typography>
          </StyledPaper>
        </StyledContainer>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
