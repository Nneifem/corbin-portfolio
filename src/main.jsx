import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './pages/Homepage'
import Music from './pages/Music'
import Art from './pages/Art'
import Youtube from './pages/Youtube'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/homepage',
        element: <Homepage />
      },
      {
        path: '/art',
        element: <Art />
      },
      {
        path: '/music',
        element: <Music />
      },
      {
        path: '/youtube',
        element: <Youtube />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
