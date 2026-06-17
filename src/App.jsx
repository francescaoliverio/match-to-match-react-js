// src\App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import PrivateRoutes from './components/PrivateRoutes.jsx'
import BasicLayout from './layout/BasicLayout'
import NotFound from './pages/NotFound'
import Explore from './pages/Explore'
import Match from './pages/Match'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SearchResults from './pages/SearchResults'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      // 🛑 404: not found
      { path: '*', element: <NotFound /> },
      // 🔓 public routes
      { index: true, element: <Explore /> },
      { path: 'profile/login', element: <Login /> },
      { path: 'results', element: <SearchResults /> },
      // 🔒 private routes
      {
        element: <PrivateRoutes />,
        children: [
          { path: 'match', element: <Match /> },
          { path: 'chat', element: <Chat /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
])

export default function App() {
  return (
    <AuthProvider>
      <div className='h-screen flex flex-col items-stretch'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  )
}
