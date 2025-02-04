import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState } from "react";

import Collapsible from "./Collapsible";
import { useCanvasContext } from "../context/CanvasContext";
import Card_Text from "./CardTypes/Card_Text";
import { ContextualMenu } from "./ContextualMenu";

const CARD_TYPE = {
  TEXT: "text",
};

function Card({ title, body, type, initialPosition = { x: 300, y: 300 }, id }) {
  // State to manage the card's position
  const [position, setPosition] = useState(initialPosition);
  const { zoom, removeCardFromCanvas, updateCardTitle, udpateCardBody } = useCanvasContext();

  // Give draggable behavior
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  // Calculate the style by combining the current position and the drag offset
  const dragStyle = {
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

  function updateTitle(event) {
    updateCardTitle(event?.target?.value, id);
  }

  function updateBody(event){
    udpateCardBody(event?.target?.value, id);
  }

  return (
    <div
      className="card draggable"
      ref={setNodeRef}
      style={dragStyle}
      {...listeners}
      {...attributes}
      onPointerUp={handleDragEnd} // Update position when drag ends
      onMouseDown={(e) => e.stopPropagation()}
      id={id}
    >
      <ContextualMenu onDelete={onDelete} />
      <Collapsible title={title} setTitle={updateTitle} titleStyle="card-title">
        {type === CARD_TYPE.TEXT && <Card_Text body={body} setBody={updateBody}/>}
      </Collapsible>
    </div>
  );
}

export default Card;
export { CARD_TYPE };
