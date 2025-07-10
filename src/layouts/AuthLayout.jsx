// src/layouts/AuthLayout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
import { Outlet } from "react-router-dom";
// import Header from "../components/common/Header"; // Optional reusable header

import { Toaster } from 'react-hot-toast';

export default function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("verit_token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* <ThemeSwitcher /> */}
        <Outlet />
        <Toaster />
        {/* <Header /> */}
      </div>
    </>
  );
}