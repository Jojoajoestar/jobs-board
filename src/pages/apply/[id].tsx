// src/pages/apply/[id].tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { TextField, Button, CircularProgress, Box, Typography } from '@mui/material';
import { Job } from '../../types/types';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Mock function for job application submission
const submitJobApplication = async (jobId: string, name: string, email: string) => {
  // Replace with actual job application submission logic
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to submit application. Please try again.'));
      }
    }, 2000);
  });
};

const ApplyJobPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitJobApplication(id as string, name, email);
      toast.success('Application submitted successfully');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
      } else {
        setError('An unknown error occurred');
        toast.error('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Box component="main" sx={{ padding: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Apply for Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Apply'}
          </Button>
          {error && (
            <Typography color="error" sx={{ marginTop: '1rem' }}>
              {error}
            </Typography>
          )}
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default ApplyJobPage;
