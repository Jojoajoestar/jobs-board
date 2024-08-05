/**
 * ApplyPage Component
 *
 * This component renders the application page for a specific job.
 * It fetches job details using the job ID from the URL and provides a form for job applications.
 *
 * Example:
 * <ApplyPage />
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaSpinner } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components
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

const ApplyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [job, setJob] = useState<any | null>(null); // Use any type for job initially

  // Fetch job details based on the job ID from the URL
  useEffect(() => {
    const fetchJob = async () => {
      if (id) {
        const response = await fetch(`/api/jobs?id=${id}`);
        const data = await response.json();
        setJob(data.data);
      }
    };

    fetchJob();
  }, [id]);

  // Handle form submission for job application
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`/api/apply`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to submit application');
      setSuccess('Application submitted successfully');
      toast.success('Application submitted successfully');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  // Render a loading spinner if the job details are still being fetched
  if (!job) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Apply for {job.title} | IT Jobs</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Apply for {job.title}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Job Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Company:</strong> {job.company.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Location:</strong> {job.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Salary:</strong> {job.salary}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {job.description}
          </Typography>

          <Typography variant="h6" component="h2" gutterBottom>
            Application Form
          </Typography>
          {loading && (
            <Box display="flex" justifyContent="center" mb={2}>
              <CircularProgress />
              <Typography variant="body1" color="primary" ml={2}>
                Submitting your application...
              </Typography>
            </Box>
          )}
          {error && (
            <Typography variant="body1" color="error" align="center" gutterBottom>
              {error}
            </Typography>
          )}
          {success && (
            <Typography variant="body1" color="success" align="center" gutterBottom>
              {success}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                required
                variant="outlined"
                placeholder="John Doe"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                variant="outlined"
                placeholder="johndoe@example.com"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                fullWidth
                required
                variant="outlined"
                placeholder="(123) 456-7890"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Resume"
                name="resume"
                type="file"
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Cover Letter"
                name="coverLetter"
                multiline
                rows={4}
                fullWidth
                required
                variant="outlined"
                placeholder="Why are you a good fit for this job?"
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Submit Application
            </Button>
          </form>
        </StyledPaper>
      </StyledContainer>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ApplyPage;
