import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact-us/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
