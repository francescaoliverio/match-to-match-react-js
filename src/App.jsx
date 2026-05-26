import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BasicLayout from "./layout/BasicLayout";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <h1>Match to Match</h1>
      <p>Ready, steady, go!</p>
      <RouterProvider router={router} />
    </>
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
