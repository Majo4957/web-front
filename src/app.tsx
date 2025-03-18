import { Outlet } from "react-router";
import Navbar from "./ui/nav-bar";

export function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}
