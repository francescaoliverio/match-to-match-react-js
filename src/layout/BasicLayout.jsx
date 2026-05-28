import { Outlet } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

export default function BasicLayout() {
  return (
    <>
      <main  className="flex flex-col grow items-center justify-start p-10">
        <Outlet/>
      </main>
        <BottomNavBar />
    </>
  );
}
