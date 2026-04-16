import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import LiveTicker from "./LiveTicker";

export default function Layout() {
  return (
    <div className="min-h-screen bg-asphalt text-silver relative overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <LiveTicker />
    </div>
  );
}