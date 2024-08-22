import { useState } from 'react';
import { TextField, Button, Typography, Alert, createTheme, ThemeProvider, Grid } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const LoginForm = () => {
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

    []

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
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: purple[50] }}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmitLogin} noValidate>
            <Typography variant="h4" gutterBottom color="primary" align="center">
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
              InputLabelProps={{
                style: { color: purple[500] }
              }}
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
              InputLabelProps={{
                style: { color: purple[500] }
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginForm;
