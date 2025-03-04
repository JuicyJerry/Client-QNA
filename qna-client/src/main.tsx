import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./components/LoadingSpinner";

// 둘 다 가능
// createRoot(document.getElementById("root")!).render(
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <LoadingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadingProvider>
  </StrictMode>
);
