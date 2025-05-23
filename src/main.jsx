import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import CompanySearch from "./pages/CompanySearch.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/companysearch" element={<CompanySearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
