// src/pages/jobs.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import { Container, Typography, Paper, Box, CircularProgress, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

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

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchData('/api/jobs');
      if (data) {
        setJobs(data.data);
      } else {
        setError('Failed to load jobs');
      }
      setLoading(false);
    };

    loadJobs();
  }, []);

  if (loading) return (
    <>
      <Navbar />
      <Container>
        <CircularProgress />
      </Container>
    </>
  );

  if (error) return (
    <>
      <Navbar />
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    </>
  );

  return (
    <>
      <Navbar />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Jobs
          </Typography>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {job.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {job.company.name}
                    </Typography>
                    <Typography color="textSecondary">
                      {job.location}
                    </Typography>
                    <Typography color="textSecondary">
                      {job.salary}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {job.description.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`/job/${job.id}`} passHref>
                      <Button size="small" color="primary">
                        More Info
                      </Button>
                    </Link>
                    <Link href={`/apply/${job.id}`} passHref>
                      <Button size="small" color="primary">
                        Apply Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default JobsPage;
