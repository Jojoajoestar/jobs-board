// src/pages/login.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
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

const LoginPage: React.FC = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast.success('Login Successful');
        router.push('/jobs');
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Navbar isStatic alwaysBlue />
      <main>
        <StyledContainer maxWidth="sm">
          <StyledPaper elevation={3}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  required
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <MuiLink component={Link} href="/forgot-password" underline="hover">
                  Forgot my password
                </MuiLink>
                <MuiLink component={Link} href="/signup" underline="hover">
                  Don&apos;t have an account? Sign Up
                </MuiLink>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? <CircularProgress size={24} /> : 'Login'}
              </Button>
            </form>
          </StyledPaper>
        </StyledContainer>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
};

export default LoginPage;
