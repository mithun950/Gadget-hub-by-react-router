import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import Categories from './Components/Categories';
import ProductsDetails from './Components/ProductsDetails';
import ErrorPage from './Components/ErrorPage';
import OrderTracking from './Components/OrderTracking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('/Data.json'),
        children:[
        {
          path:'/',
          element: <Categories></Categories>,
          loader: () => fetch('/Data.json'),
        }
        ],
      },
      {
         path: 'productsDetails/:id',
         element: <ProductsDetails></ProductsDetails>

      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
      },
      {
         path:'/ordertracking',
         element:<OrderTracking></OrderTracking>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
