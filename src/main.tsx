import React from "react";
import ReactDOM from "react-dom/client";
import { GameProvider } from "./context/GameContext.tsx";
import "./index.css";
import AppRouter from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
      <AppRouter />
    </GameProvider>
  </React.StrictMode>
);
