import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Pages
import DefaultPage from "./App.tsx"
import Page404 from "./pages/404/404.tsx"
import Home from "./pages/Home.tsx"
import Status from "./pages/Status.tsx"
import Terms from "./pages/Terms.tsx"
import Privacy from "./pages/Privacy.tsx"
import LicensePage from "./pages/License.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage></DefaultPage>,
    children: [
      {
        path: `*`,
        element: <Page404></Page404>,
      },
      {
        path: `/`,
        element: <Home></Home>,
      },
      {
        path: `/status`,
        element: <Status></Status>,
      },
      {
        path: `/terms`,
        element: <Terms></Terms>,
      },
      {
        path: `/privacy`,
        element: <Privacy></Privacy>,
      },
      {
        path: `/license`,
        element: <LicensePage></LicensePage>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
