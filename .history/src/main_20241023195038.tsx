import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";

//Pages

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);