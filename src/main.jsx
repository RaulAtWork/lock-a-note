import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DndContext } from "@dnd-kit/core";
import { CanvasProvider } from "./context/CanvasContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DndContext autoScroll={false}>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </DndContext>
  </StrictMode>
);
