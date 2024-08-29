import "./signUpForm.scss";
import { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const validateSignUp = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      setSuccessMessage('Sign up successful! Redirecting to home page...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={handleSubmitSignUp} noValidate>
          <Typography variant="h4" color="primary" align="center">
            Sign Up
          </Typography>
          {successMessage && (
            <Alert severity="success" style={{ marginBottom: '16px' }}>
              {successMessage}
            </Alert>
          )}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChangeSignUp}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChangeSignUp}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChangeSignUp}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChangeSignUp}
            fullWidth
            margin="normal"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Sign Up
          </Button>
        </form>
      </div>
  );
};

export default SignUpForm;

