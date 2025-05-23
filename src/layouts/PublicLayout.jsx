// src/layouts/PublicLayout.jsx
import ThemeSwitcher from "../components/common/ThemeSwitcher";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function PublicLayout() {
  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        <ThemeSwitcher />
        <Outlet />
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                background: "#fff",
                color: "#333",
                borderRadius: "8px",
                padding: "12px 16px",
                },
            }}
            />

      </div>
    </>
  );
}
