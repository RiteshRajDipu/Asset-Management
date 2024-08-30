import "./loginFinalForm.scss";
import { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Form, useField } from 'react-final-form';

const required = (value) => (value ? undefined : 'This field is required');
const email = (value) => 
  value && !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : undefined;

const LoginFinalForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    setSuccessMessage('Login successful! Redirecting to home page...');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const EmailField = () => {
    const { input, meta } = useField('email', {
      validate: (value) => email(value) || required(value),
    });

    return (
      <TextField
        {...input}
        label="Email"
        fullWidth
        margin="normal"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    );
  };

  const PasswordField = () => {
    const { input, meta } = useField('password', {
      validate: required,
    });

    return (
      <TextField
        {...input}
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    );
  };

  return (
    <div className="login-form-container">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h4" color="primary" align="center">
              Login
            </Typography>
            {successMessage && (
              <Alert severity="success" style={{ marginBottom: '16px' }}>
                {successMessage}
              </Alert>
            )}
            <EmailField />
            <PasswordField />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
              disabled={submitting || pristine}
            >
              Login
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default LoginFinalForm;
