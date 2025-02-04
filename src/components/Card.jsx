import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

import Collapsible from "./Collapsible";
import { useCanvasContext } from "../context/CanvasContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CARD_TYPE = {
  TEXT: "text",
};

function Card({ title, body, type, initialPosition = { x: 300, y: 300 }, id }) {
  // State to manage the card's position
  const [position, setPosition] = useState(initialPosition);
  const { zoom, removeCardFromCanvas } = useCanvasContext();

  // Give draggable behavior
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  // Calculate the style by combining the current position and the drag offset
  const style = {
    transform: `translate3d(${((transform?.x || 0) + position.x) / zoom}px, ${
      ((transform?.y || 0) + position.y) / zoom
    }px, 0)`,
  };

  // Handle the drag end event to update the position
  const handleDragEnd = () => {
    if (transform) {
      setPosition((prevPosition) => ({
        x: prevPosition.x + transform.x,
        y: prevPosition.y + transform.y,
      }));
    }
  };

  function onDelete() {
    removeCardFromCanvas(id);
  }

  return (
    <>
      <div
        className="card draggable"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onPointerUp={handleDragEnd} // Update position when drag ends
        onMouseDown={(e) => e.stopPropagation()}
        id={id}
      >
        <ContextualMenu onDelete={onDelete} />
        <Collapsible title={title} titleStyle="card-title">
          <p className="card-content">{body}</p>
        </Collapsible>
      </div>
    </>
  );
}

export default Card;

function ContextualMenu({ onDelete, onEdit }) {
  return (
    <div className="contextual-menu">
      <ul className="contextual-menu-actions">
        <li onClick={onEdit}>
          <FontAwesomeIcon icon={faPen} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={onDelete}
            onPointerDown={(e) => e.stopPropagation()}
          />
        </li>
      </ul>
    </div>
  );
}
