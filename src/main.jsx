import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import Routes from "./router/routes.jsx";
import AOSProvider from "./context/AOSProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AOSProvider>
        <RouterProvider router={Routes} />
      </AOSProvider>
    </AuthProvider>
  </StrictMode>
);
