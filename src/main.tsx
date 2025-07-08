import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admins } from "./pages/Admins.tsx";
import { Users } from "./pages/Users.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Users /> },
  { path: "/admin", element: <Admins /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
