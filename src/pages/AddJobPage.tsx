// src/pages/AddJobPage.tsx
import React from 'react';
import { TextField, Button, Typography, Container, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const jobTypes = ['Full-Time', 'Part-Time', 'Contract'];
const experienceLevels = ['Entry', 'Mid', 'Senior'];

const AddJobPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      type: '',
      description: '',
      location: '',
      salary: '',
      experienceLevel: '',
      companyName: '',
      companyDescription: '',
      contactEmail: '',
      contactPhone: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      salary: Yup.string().required('Required'),
      experienceLevel: Yup.string().required('Required'),
      companyName: Yup.string().required('Required'),
      companyDescription: Yup.string().required('Required'),
      contactEmail: Yup.string().email('Invalid email address').required('Required'),
      contactPhone: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            company: {
              name: values.companyName,
              description: values.companyDescription,
              contactEmail: values.contactEmail,
              contactPhone: values.contactPhone,
            }
          }),
        });

        if (!res.ok) {
          throw new Error('Failed to add job');
        }

        toast.success('Job added successfully');
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error('An unexpected error occurred');
        }
      }
    },
  });

  return (
    <>
      <Navbar isStatic />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Add Job
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <TextField
                label="Job Title"
                name="title"
                fullWidth
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined" error={formik.touched.type && Boolean(formik.errors.type)}>
                <InputLabel>Job Type</InputLabel>
                <Select
                  label="Job Type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                >
                  {jobTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                variant="outlined"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Location"
                name="location"
                fullWidth
                variant="outlined"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Salary"
                name="salary"
                fullWidth
                variant="outlined"
                value={formik.values.salary}
                onChange={formik.handleChange}
                error={formik.touched.salary && Boolean(formik.errors.salary)}
                helperText={formik.touched.salary && formik.errors.salary}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined" error={formik.touched.experienceLevel && Boolean(formik.errors.experienceLevel)}>
                <InputLabel>Experience Level</InputLabel>
                <Select
                  label="Experience Level"
                  name="experienceLevel"
                  value={formik.values.experienceLevel}
                  onChange={formik.handleChange}
                >
                  {experienceLevels.map((level) => (
                    <MenuItem key={level} value={level}>{level}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                label="Company Name"
                name="companyName"
                fullWidth
                variant="outlined"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Company Description"
                name="companyDescription"
                fullWidth
                variant="outlined"
                value={formik.values.companyDescription}
                onChange={formik.handleChange}
                error={formik.touched.companyDescription && Boolean(formik.errors.companyDescription)}
                helperText={formik.touched.companyDescription && formik.errors.companyDescription}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Contact Email"
                name="contactEmail"
                fullWidth
                variant="outlined"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                error={formik.touched.contactEmail && Boolean(formik.errors.contactEmail)}
                helperText={formik.touched.contactEmail && formik.errors.contactEmail}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Contact Phone"
                name="contactPhone"
                fullWidth
                variant="outlined"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                error={formik.touched.contactPhone && Boolean(formik.errors.contactPhone)}
                helperText={formik.touched.contactPhone && formik.errors.contactPhone}
              />
            </Box>
            <Button type="submit" fullWidth variant="contained" color="primary" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Submitting...' : 'Add Job'}
            </Button>
          </form>
        </StyledPaper>
      </StyledContainer>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
};

export default AddJobPage;
