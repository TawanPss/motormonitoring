import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./LoginAndReg/Reg.jsx";
import Login from "./LoginAndReg/Login.jsx";
import Home from "./component/Home.jsx";
import "./index.css";
import AllMotors from "./component/AllMotors.jsx";
import Factory from "./component/Factory.jsx";
import Mutiview from "./component/Mutiview.jsx";
import Record from "./component/Record.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/all-motors",
    element: <AllMotors />,
  },
  {
    path: "/factory",
    element: <Factory />,
  },
  {
    path: "/multi-view",
    element: <Mutiview />,
  },
  {
    path: "/record",
    element: <Record />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
