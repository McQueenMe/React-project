import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import MenuPage from './pages/Menu.jsx'
import ReservationPage from './pages/Reservations.jsx'
import RootPage from './pages/Root.jsx'


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
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path: 'reservation',
        element: <ReservationPage />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Заменяем <RootPage /> на RouterProvider и передаем ему наш router */}
    <RouterProvider router={router} />
  </StrictMode>,
)
