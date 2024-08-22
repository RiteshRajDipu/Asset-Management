import Home from "./pages/home/Home";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
// import { productInputs, userInputs } from "./formSource";
// import SignUpForm from "./pages/login/SignUpForm";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Products from "./pages/products/Products";
import Users from "./pages/Users/Users";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./pages/login/AuthPage";
import "./styles/global.scss";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

function App() {
  const Layout = () => {
    return (
      <div className="main">
         <Navbar />
         <div className="container">
           <div className="menuContainer">
             <Sidebar />
           </div>
           <div className="contentContainer">
            <Outlet />
           </div>
         </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path:"/login",
      element: <AuthPage />
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App;