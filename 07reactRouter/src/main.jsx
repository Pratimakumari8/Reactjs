import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from  'react-router-dom'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element : <Home/>

      },
      {
        path: "about",
        element:<About/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router= {router} />
  </StrictMode>,
)
