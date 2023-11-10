import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SingleCountry from "./pages/SingleCountry"

function App() {
    const routes = createBrowserRouter ([
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/singleCountry/:country",
            element: <SingleCountry />
          }
        ]
      }
    ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App