import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./pages/login/AuthPage";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import "./styles/global.scss";
// import Update from "./pages/login/Update";
import UpdateFinalForm from "./pages/login/finalForm/UpdataFinalForm";
import LoginFinalForm from "./pages/login/finalForm/LoginFinalForm";

const App = () => {
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
    },
    // {
    //   path:"/update",
    //   element: <Update />
    // },
    {
      path:"/update",
      element: <UpdateFinalForm />
    },
    {
      path:"/login",
      element: <LoginFinalForm />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;