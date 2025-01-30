import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { useCanvasContext } from "../context/CanvasContext";

function Canvas({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  // isOver will become true when you move a dropable element on top of it

  // retrieve zoom from our context
  const { zoom, canvasPosition, setNewCanvasPosition } = useCanvasContext();

  // State to track the canvas's position
  const [isPanning, setIsPanning] = useState(false); // Track if panning is active
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 }); // Track the starting point of the pan

  // Handle mouse down to start panning
  const handleMouseDown = (e) => {
    setIsPanning(true);
    setStartPosition({
      x: e.clientX - canvasPosition.x,
      y: e.clientY - canvasPosition.y,
    });
  };

  // Handle mouse move to update the canvas position
  const handleMouseMove = (e) => {
    if (!isPanning) return;

    const newX = e.clientX - startPosition.x;
    const newY = e.clientY - startPosition.y;

    

    setNewCanvasPosition({ x: newX, y: newY });
  };

  // Handle mouse up to stop panning
  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Zoom in
  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Limit zoom to 2x
  };

  // Zoom out
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Limit zoom to 0.5x
  };

  return (
    <div
      className="canvas-container"
      ref={setNodeRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop panning if the mouse leaves the canvas
      style={{
        transform: `translate(${canvasPosition.x}px, ${canvasPosition.y}px) scale(${zoom})`,
      }}
    >
      {children}
    </div>
  );
}

export default Canvas;
