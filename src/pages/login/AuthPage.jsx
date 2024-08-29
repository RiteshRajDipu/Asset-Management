import { useState } from 'react';
import { Grid, Tabs, Tab, createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
// import LoginForm from './LoginForm';

import SignUpForm from './SignUpForm';
import LoginFormFinalForm from './finalForm/LoginFormFinalForm';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: purple[50] }}>
        <Grid item xs={12} md={6}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
          {activeTab === 0 && <LoginFormFinalForm />}
          {activeTab === 1 && <SignUpForm />}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AuthPage;
