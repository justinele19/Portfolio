import { createBrowserRouter, Outlet } from "react-router";
import { Nav } from "./components/nav";
import { Home } from "./pages/home";
import { AboutA } from "./pages/about-a";

function Root() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutA },
    ],
  },
]);
