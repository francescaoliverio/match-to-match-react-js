import { useAuth } from "../context/AuthContext";
import { Link, Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import TopNavBar from "../components/TopNavBar";
import Button from "../components/Button";

const backgrounds = {
  "/": "url('/images/background/friends.jpg')",
  "/match": "url('/images/background/friends-02.webp')",
  "/chat": "url('/images/background/friends-01.webp')",
  "/profile": "url('/images/background/selfie-02.jpg')",
}
const bgPaths = ["/match", "/chat", "/profile"]

export default function BasicLayout() {
  // Authentication hooks
  const { logout } = useAuth();
  const { user } = useAuth();
  // Page background depending on location
  const { pathname } = useLocation();
  const bgKey = bgPaths.find((key) => pathname.startsWith(key)) ?? "/";
  // Protected paths: need to log in to access the content of match, chat, profile
  const protectedPaths = ["/match", "/chat", "/profile"];
  const publicPaths = ["/profile/login"];
  const needLogin = !publicPaths.includes(pathname) && protectedPaths.some((path) => pathname.startsWith(path));

  return (
    <div className="h-screen flex flex-col bg-cover bg-top" style={{ backgroundImage: backgrounds[bgKey] }}>
      <TopNavBar />
      <main className="flex flex-col grow items-center justify-start overflow-auto bg-light-overlay backdrop-saturate-120 backdrop-blur-[2px]">
        {(user || !needLogin) ? (
          <Outlet />
        ) : (
          <Link to="/profile/login">
            <Button label="Accedi" variant="primary" />
          </Link>
        )}
      </main>
      <BottomNavBar />
    </div>
  )
}