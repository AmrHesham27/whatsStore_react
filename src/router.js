// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";

// css & bootsrap
import Spinner from "react-bootstrap/Spinner";

// pages
import App from "./App";
import EditStore from "./pages/EditStore/index";
import ShowStore from "./pages/ShowStore/index";
import BuildStore from "./pages/BuildStore";

const SpinnerPage = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
    </div>
  );
};

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <BuildStore />
            </Suspense>
          ),
        },
        {
          path: "editStore",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <EditStore />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
