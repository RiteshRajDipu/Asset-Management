// import { LoginForm } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import LoginReg from "./components/Pages/auth/LoginReg";
import ForgotPassword from "./components/Pages/auth/ForgotPassword";
import ResetPassword from "./components/Pages/auth/ResetPassword";
import Dashboard from "./components/Pages/Dashboard";
// import { RegistrationForm } from "./components/Registration";
// import { SignupForm } from "./components/Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page Not Found !!</h1>} />
        </Routes>
    
      </BrowserRouter>
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
    </>
  )
}

export default App
