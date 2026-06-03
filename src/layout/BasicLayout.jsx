import { Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

const backgrounds = {
  "/": "url('/images/background/friends.jpg')",
  "/match": "url('/images/background/friends-02.webp')",
  "/chat":  "url('/images/background/friends-01.webp')",
  "/profile": "url('/images/background/selfie-02.jpg')",
}
const bgPaths = ["/match", "/chat", "/profile"]

export default function BasicLayout() {
  const { pathname } = useLocation()
  const bgKey = bgPaths.find(key => pathname.startsWith(key)) ?? "/"

  return (
    <div className="h-screen flex flex-col bg-cover bg-top" style={{ backgroundImage: backgrounds[bgKey] }}>
      <main className="flex flex-col grow items-center justify-start overflow-auto bg-light-overlay backdrop-saturate-120 backdrop-blur-[2px]">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  )
}