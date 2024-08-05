/**
 * AddJobPage Component
 *
 * This component renders a form to add a new job listing.
 * It includes form validation using Formik and Yup, and provides auto-fill suggestions for job titles and locations.
 *
 * Example:
 * <AddJobPage />
 */

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Autosuggest from 'react-autosuggest';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/system';

// Sample data for auto-fill suggestions
const jobTitles = ['Software Engineer', 'Project Manager', 'Designer', 'Product Manager'];
const locations = ['New York, NY', 'San Francisco, CA', 'Austin, TX', 'Remote'];

// Function to get suggestions based on input value
const getSuggestions = (value: string, suggestions: string[]) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : suggestions.filter(suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue);
};

// Function to handle suggestion selection
const getSuggestionValue = (suggestion: string) => suggestion;

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

const AddJobPage: React.FC = () => {
  const [jobTitleSuggestions, setJobTitleSuggestions] = useState<string[]>([]);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Formik setup for form validation
  const formik = useFormik({
    initialValues: {
      title: '',
      company: '',
      email: '',
      location: '',
      jobType: '',
      salaryType: '',
      payAmountMin: '',
      payAmountMax: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Job title is required'),
      company: Yup.string().required('Company name is required'),
      email: Yup.string().email('Invalid email address').required('Contact email is required'),
      location: Yup.string().required('Location is required'),
      jobType: Yup.string().required('Job type is required'),
      salaryType: Yup.string().required('Salary type is required'),
      payAmountMin: Yup.number().required('Pay amount is required').typeError('Pay amount must be a number'),
      payAmountMax: Yup.number().required('Pay amount is required').typeError('Pay amount must be a number'),
      description: Yup.string().required('Job description is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success('Job added successfully!');
      } catch (error) {
        toast.error('Failed to add job.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Add Job
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <Autosuggest
                  suggestions={jobTitleSuggestions}
                  onSuggestionsFetchRequested={({ value }) => {
                    setJobTitleSuggestions(getSuggestions(value, jobTitles));
                  }}
                  onSuggestionsClearRequested={() => {
                    setJobTitleSuggestions([]);
                  }}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                  inputProps={{
                    id: 'title',
                    name: 'title',
                    placeholder: 'e.g. Software Engineer',
                    value: formik.values.title,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  renderInputComponent={(inputProps) => (
                    <TextField
                      {...inputProps}
                      fullWidth
                      variant="outlined"
                      label="Job Title"
                      error={formik.touched.title && Boolean(formik.errors.title)}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                  )}
                />
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                label="Company Name"
                name="company"
                fullWidth
                required
                variant="outlined"
                placeholder="e.g. Tech Corp"
                {...formik.getFieldProps('company')}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Contact Email"
                name="email"
                type="email"
                fullWidth
                required
                variant="outlined"
                placeholder="e.g. contact@techcorp.com"
                {...formik.getFieldProps('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <Autosuggest
                  suggestions={locationSuggestions}
                  onSuggestionsFetchRequested={({ value }) => {
                    setLocationSuggestions(getSuggestions(value, locations));
                  }}
                  onSuggestionsClearRequested={() => {
                    setLocationSuggestions([]);
                  }}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                  inputProps={{
                    id: 'location',
                    name: 'location',
                    placeholder: 'e.g. New York, NY',
                    value: formik.values.location,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  renderInputComponent={(inputProps) => (
                    <TextField
                      {...inputProps}
                      fullWidth
                      variant="outlined"
                      label="Location"
                      error={formik.touched.location && Boolean(formik.errors.location)}
                      helperText={formik.touched.location && formik.errors.location}
                    />
                  )}
                />
              </FormControl>
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="jobType-label">Job Type</InputLabel>
                <Select
                  labelId="jobType-label"
                  id="jobType"
                  name="jobType"
                  value={formik.values.jobType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Job Type"
                  error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                >
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </Select>
                {formik.touched.jobType && formik.errors.jobType ? (
                  <Typography variant="body2" color="error">
                    {formik.errors.jobType}
                  </Typography>
                ) : null}
              </FormControl>
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="salaryType-label">Salary Type</InputLabel>
                <Select
                  labelId="salaryType-label"
                  id="salaryType"
                  name="salaryType"
                  value={formik.values.salaryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Salary Type"
                  error={formik.touched.salaryType && Boolean(formik.errors.salaryType)}
                >
                  <MenuItem value="Hourly">Hourly</MenuItem>
                  <MenuItem value="Annual">Annual</MenuItem>
                </Select>
                {formik.touched.salaryType && formik.errors.salaryType ? (
                  <Typography variant="body2" color="error">
                    {formik.errors.salaryType}
                  </Typography>
                ) : null}
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                label="Pay Amount (Min)"
                name="payAmountMin"
                fullWidth
                required
                variant="outlined"
                placeholder="Enter minimum amount in USD"
                {...formik.getFieldProps('payAmountMin')}
                error={formik.touched.payAmountMin && Boolean(formik.errors.payAmountMin)}
                helperText={formik.touched.payAmountMin && formik.errors.payAmountMin}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Pay Amount (Max)"
                name="payAmountMax"
                fullWidth
                required
                variant="outlined"
                placeholder="Enter maximum amount in USD"
                {...formik.getFieldProps('payAmountMax')}
                error={formik.touched.payAmountMax && Boolean(formik.errors.payAmountMax)}
                helperText={formik.touched.payAmountMax && formik.errors.payAmountMax}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Job Description"
                name="description"
                multiline
                rows={6}
                fullWidth
                required
                variant="outlined"
                placeholder="Describe the job in detail"
                {...formik.getFieldProps('description')}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting || loading}
            >
              {formik.isSubmitting || loading ? <CircularProgress size={24} /> : 'Add Job'}
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
