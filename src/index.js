import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import Students from "./pages/Students/Students";
import Home from "./pages/Home/Home";
import StudentDetail from "./pages/StudentDetail/StudentDetail";

import "./index.css";
import Charts from "./pages/Charts/Charts";

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
    path: "/students/:studentId",
    element: <StudentDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/charts",
    element: <Charts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
