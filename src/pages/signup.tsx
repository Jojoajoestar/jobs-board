// src/pages/signup.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { auth } from '../firebaseConfig';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';
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

const SignUpPage: React.FC = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'jobseeker',
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .matches(/\d/, 'Password must contain a number.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain a special character.')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Required'),
      agreeToTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must agree to the terms and conditions'),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        await updateProfile(userCredential.user, { displayName: values.name });
        toast.success('Sign Up Successful');
        router.push('/jobs');
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Navbar isStatic alwaysBlue />
      <StyledContainer maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <TextField
                label="Name"
                fullWidth
                required
                variant="outlined"
                {...formik.getFieldProps('name')}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                variant="outlined"
                {...formik.getFieldProps('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                {...formik.getFieldProps('password')}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                {...formik.getFieldProps('confirmPassword')}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  error={formik.touched.role && Boolean(formik.errors.role)}
                >
                  <MenuItem value="jobseeker">Job Seeker</MenuItem>
                  <MenuItem value="employer">Employer</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    color="primary"
                    checked={formik.values.agreeToTerms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label="I agree to the terms and conditions"
              />
              {formik.touched.agreeToTerms && formik.errors.agreeToTerms ? (
                <Typography variant="body2" color="error">
                  {formik.errors.agreeToTerms}
                </Typography>
              ) : null}
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>
          </form>
          <Box mt={3} textAlign="center">
            <MuiLink component={Link} href="/login" underline="hover">
              Already have an account? Log In
            </MuiLink>
          </Box>
        </StyledPaper>
      </StyledContainer>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
};

export default SignUpPage;
