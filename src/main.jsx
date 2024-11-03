import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { root, Root } from 'postcss';
import Must from './Must/Must';
import ErrorPage from './Must/ErrorPage/ErrorPage';
import Home from './Home/Home';
import DashBoard from './Must/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Must></Must>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/dashboard',
        element : <DashBoard></DashBoard>
      }

    ]
    
    ,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
