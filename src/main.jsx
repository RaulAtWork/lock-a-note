import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DndContext } from "@dnd-kit/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DndContext>
      <App />
    </DndContext>
  </StrictMode>
);
