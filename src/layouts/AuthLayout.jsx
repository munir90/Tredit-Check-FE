// src/layouts/AuthLayout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
// import Header from "../components/common/Header"; // Optional reusable header

import { Toaster } from 'react-hot-toast';

export default function AuthLayout({ children }) {
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
        <Toaster />
        {/* <Header /> */}
        <div className="p-4">{children}</div>
        </div>
    </>
  );
}