import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BasicLayout from "./layout/BasicLayout";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <RouterProvider router={router} />
    </div>
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
      { path: "profile", element: <Profile />, children: [{ path: "login", element: <Login /> }] },
    ],
  },
]);
