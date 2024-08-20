// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.scss";
// import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/newUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import LoginReg from "./pages/loginReg/auth/LoginReg";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import SignUpForm from "./pages/login/SignUpForm";
// import LoginForm from "./pages/login/LoginForm";
// import CombinedAuthForm from "./pages/login/LoginForm";
import AuthPage from "./pages/login/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage /> } />
        <Route
          path="/*"
          element={
            <>
               <Routes>
                 <Route index element={<Home />} />
                 <Route path="auth" element={<SignUpForm /> } />
                 <Route path="login" element={<AuthPage />} />
                 <Route path="users">
                    <Route index element={<List />} />
                    <Route path=":userId" element={<Single />} />
                    <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
                 </Route>
                 <Route path="products">
                    <Route index element={<List />} />
                    <Route path=":productId" element={<Single />} />
                    <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
                 </Route>
               </Routes>
             


              {/* <div className="container">
                <Sidebar />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/user/:userId" element={<User />} />
                  <Route path="/newUser" element={<NewUser />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="newProduct" element={<NewProduct />} />
                </Routes>
              </div> */}
            </>
           } 
          />
      </Routes>
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
