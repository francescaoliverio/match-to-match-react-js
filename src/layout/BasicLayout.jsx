import { Outlet } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

export default function BasicLayout() {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
}
