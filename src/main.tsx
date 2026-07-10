import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import "@fontsource-variable/inter"

// Pages
import DefaultPage from "./App.tsx"
import Page404 from "./pages/404/404.tsx"
import Home from "./pages/Home.tsx"
import OpenSource from "./pages/OpenSource.tsx"
import Status from "./pages/Status.tsx"
import Terms from "./pages/Terms.tsx"
import Privacy from "./pages/Privacy.tsx"
import LicensePage from "./pages/License.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: `*`,
        element: <Page404 />,
      },
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/open-source`,
        element: <OpenSource />,
      },
      {
        path: `/community`,
        element: <Navigate to="/open-source" replace />,
      },
      {
        path: `/partner`,
        element: <Navigate to="/open-source" replace />,
      },
      {
        path: `/status`,
        element: <Status />,
      },
      {
        path: `/terms`,
        element: <Terms />,
      },
      {
        path: `/privacy`,
        element: <Privacy />,
      },
      {
        path: `/license`,
        element: <LicensePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
