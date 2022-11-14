import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import Home from "./Pages/Home/Home";
import StudentDetail from "./Pages/StudentDetail/StudentDetail";
import Students from "./Pages/Students/Students";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students",
    element: <Students />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students/:studentName",
    element: <StudentDetail />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
