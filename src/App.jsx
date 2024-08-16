import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import LoginReg from "./components/Pages/auth/LoginReg";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />}  />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="newProduct" element={<NewProduct />} />
          <Route path="/login" element={<LoginReg /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import { LoginForm } from "./components/Login";
// import Layout from "./components/Pages/Layout";
// import Contact from "./components/Pages/Contact";
// import Home from "./components/Pages/Home";
// import LoginReg from "./components/Pages/auth/LoginReg";
// import ForgotPassword from "./components/Pages/auth/ForgotPassword";
// import ResetPassword from "./components/Pages/auth/ResetPassword";
// // import Dashboard from "./components/Pages/Dashboard";
// import Dashboard from "./components/dashboard";
// import UserList from "./pages/userList/UserList";
// import { RegistrationForm } from "./components/Registration";
// import { SignupForm } from "./components/Signup";




// {/* <BrowserRouter> */}
// {/* <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="contact" element={<Contact />} />
//     <Route path="login" element={<LoginReg />} />
//     <Route path="forgot-password" element={<ForgotPassword />} />
//     <Route path="reset" element={<ResetPassword />} />
//   </Route>
//   {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//   {/* <Route path="/dashboard" element={<Dashboard />}/>
//   <Route path="/users" element={<UserList />} />          
//   <Route path="*" element={<h1>Error 404 Page Not Found !!</h1>} />
// </Routes> */}

// {/* </BrowserRouter> */} */}
