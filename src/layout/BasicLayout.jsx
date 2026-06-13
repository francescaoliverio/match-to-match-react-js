// src\layout\BasicLayout.jsx

import { Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import TopNavBar from "../components/TopNavBar";

const backgrounds = {
  "/": "url('/images/background/friends.jpg')",
  "/match": "url('/images/background/friends-02.webp')",
  "/chat": "url('/images/background/friends-01.webp')",
  "/profile": "url('/images/background/selfie-02.jpg')",
};
const bgPaths = ["/match", "/chat", "/profile"];

export default function BasicLayout() {
  // Page background depending on location
  const { pathname } = useLocation();
  const bgKey = bgPaths.find((key) => pathname.startsWith(key)) ?? "/";

  return (
    <div className="w-screen h-screen flex flex-col bg-cover bg-top" style={{ backgroundImage: backgrounds[bgKey] }}>
      <TopNavBar />
      <main className="w-full flex flex-col grow items-center justify-start overflow-auto bg-light-overlay backdrop-saturate-120 backdrop-brightness-110 backdrop-blur-[2px]">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
