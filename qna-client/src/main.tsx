import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./components/LoadingSpinner";

const rootElement = document.getElementById("root");

// 둘 다 가능
// createRoot(document.getElementById("root")!).render(

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <LoadingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoadingProvider>
    </StrictMode>
  );
} else {
  console.error("Root Element not found");
}
// createRoot(document.getElementById("root") as HTMLElement).render(
//   <StrictMode>
//     <LoadingProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </LoadingProvider>
//   </StrictMode>
// );
