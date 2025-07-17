import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import "./index.css";
import CompanySearch from "./pages/company/search";
import CompanyProfile from './pages/company/profile';
import Home from "./pages";
import Dashboard from "./pages/dashboard";

// Dynamically import all page components
// const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

// 404 Not Found component
function NotFound() {
  return <div style={{ padding: 32, textAlign: "center" }}><h1>404 - Not Found</h1></div>;
}

// Helper to convert file path to route path
// function pathFromFile(file) {
//   // Remove './pages' and '.jsx'
//   let path = file.replace("./pages", "").replace(/\.jsx$/, "");
//   // If path is '/Index', treat as root
//   if (path.toLowerCase() === "/index") return "/";
//   // Lowercase first letter of each segment
//   path = path
//     .split("/")
//     .map((seg) => (seg ? seg.charAt(0).toLowerCase() + seg.slice(1) : ""))
//     .join("/");
//   return path;
// }

// Separate public and auth routes based on your convention
const publicRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Home />
  }
];

const authRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/company/search",
    element: <CompanySearch />
  },
  {
    path: "/company/profile/:company_number",
    element: <CompanyProfile />,
  },
];

// Object.entries(pages).forEach(([file, mod]) => {
//   const path = pathFromFile(file);
//   // Example: decide by folder name or file name
//   if (path === "/" || path.startsWith("/login")) {
//     publicRoutes.push({ path: path === "/" ? "" : path.slice(1), element: React.createElement(mod.default) });
//   } else {
//     authRoutes.push({ path: path.slice(1), element: React.createElement(mod.default) });
//   }
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              // Replace last segment if it's a parameter (text or number) with :param
              path={route.path.replace(/\/[^/]+$/, "/:param")}
              element={route.element}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          {authRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
