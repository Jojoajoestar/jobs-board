/**
 * JobPage Component
 *
 * This component renders the details of a specific job.
 * It fetches job details using the job ID from the URL and allows navigation to the previous and next jobs.
 *
 * Example:
 * <JobPage />
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CircularProgress, Typography, Box, Paper, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import Head from 'next/head';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

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

const JobPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [jobIds, setJobIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Fetch job details based on the job ID from the URL
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs?id=${id}`);
        if (!res.ok) throw new Error('Failed to fetch job');
        const data = await res.json();
        setJob(data.data);
        const allJobsRes = await fetch('/api/jobs');
        if (!allJobsRes.ok) throw new Error('Failed to fetch all jobs');
        const allJobsData = await allJobsRes.json();
        const ids = allJobsData.data.map((job: any) => job.id);
        setJobIds(ids);
        setCurrentIndex(ids.indexOf(id as string));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  // Navigate to the previous or next job
  const navigateToJob = (direction: 'previous' | 'next') => {
    let newIndex = currentIndex;
    if (direction === 'previous') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : jobIds.length - 1;
    } else {
      newIndex = currentIndex < jobIds.length - 1 ? currentIndex + 1 : 0;
    }
    const newJobId = jobIds[newIndex];
    router.push(`/job/${newJobId}`);
  };

  // Render loading spinner if job details are still being fetched
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  // Render error message if there's an error fetching job details
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  // Render nothing if job details are not available
  if (!job) return null;

  return (
    <>
      <Head>
        <title>{job.title} | IT Jobs</title>
      </Head>
      <Navbar isStatic alwaysBlue />
      <main>
        <StyledContainer maxWidth="md">
          <StyledPaper elevation={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <IconButton onClick={() => navigateToJob('previous')}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h4" component="h1" align="center">
                {job.title}
              </Typography>
              <IconButton onClick={() => navigateToJob('next')}>
                <ArrowForward />
              </IconButton>
            </Box>
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
            <Box mt={4} display="flex" justifyContent="center">
              <Link href={`/apply/${job.id}`} legacyBehavior>
                <Button variant="contained" color="primary">
                  Apply Now
                </Button>
              </Link>
            </Box>
          </StyledPaper>
        </StyledContainer>
      </main>
      <Footer />
    </>
  );
};

export default JobPage;
