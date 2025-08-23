import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// yeh Outlet Layout mein jo bhi children hai usko display krne ke liye use hota hai

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* It is used to render children routes */}
    </div>
  );
};

export default Layout;
