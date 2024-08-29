import "./loginFormFinalForm.scss";
import { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginFormFinalForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const validateLogin = () => {
    let tempErrors = {};
    if (!loginData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!loginData.password) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      localStorage.setItem('user', JSON.stringify({
        email: loginData.email,
        password: loginData.password
      }));

      setSuccessMessage('Login successful! Redirecting to home page...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmitLogin} noValidate>
          <Typography variant="h4" color="primary" align="center">
            Login
          </Typography>
          {successMessage && (
            <Alert severity="success" style={{ marginBottom: '16px' }}>
              {successMessage}
            </Alert>
          )}
          <TextField
            label="Email"
            name="email"
            value={loginData.email}
            onChange={handleChangeLogin}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChangeLogin}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Login
          </Button>
        </form>
      </div>
  );
};

export default LoginFormFinalForm;