import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx'

import BasicLayout from "./layout/BasicLayout";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default function App() {
  return (
    <AuthProvider>
      <div className="h-screen flex flex-col items-stretch">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <Explore /> },
      { path: "match", element: <Match /> },
      { path: "chat", element: <Chat /> },
      { path: "profile", element: <Profile />},
      { path: "profile/login", element: <Login />},
    ],
  },
]);
