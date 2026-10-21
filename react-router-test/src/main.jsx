import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/About.jsx'
import ReservationPage from './pages/Reservations.jsx'
import HomePage from './pages/Home.jsx'
import RootPage from './pages/Root.jsx'
import CatalogPage from './pages/Catalog.jsx'
import ProductPage from './pages/Product.jsx'
import CheckOut from './pages/CheckOut.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />
      },
      {
        path: 'catalog/:id',
        element: <ProductPage />
      },
      {
        path: 'reservation',
        element: <ReservationPage />,
      },
      {
        path: 'checkout',
        element: <CheckOut />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
