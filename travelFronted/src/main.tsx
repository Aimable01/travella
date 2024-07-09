import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Coming from "./components/Coming";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./Auth/Signup";
import Main from "./Auth/Main";
import { AuthProvider } from "./Auth/AuthContext";
import Profile from "./User/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Coming /> },
      { path: "/pricing", element: <Coming /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/auth/signup", element: <Signup /> },
  {
    path: "/user",
    children: [
      { index: true, element: <Main /> },
      { path: "/user/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
