import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const RootLayout = () => {
  return (
    <main>
      <Topbar />
      <Navbar />

      <Outlet />
    </main>
  );
};

export default RootLayout;
