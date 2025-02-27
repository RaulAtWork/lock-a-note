import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState } from "react";

import Collapsible from "./Collapsible";
import { useCanvasContext } from "../context/CanvasContext";
import Card_Text from "./CardTypes/Card_Text";
import { ContextualMenu } from "./ContextualMenu";
import Card_Link from "./CardTypes/Card_Link";
import Card_CheckList from "./CardTypes/Card_CheckList";
import { ResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

const CARD_TYPE = {
  TEXT: "text",
  LINK: "link",
  CHECKLIST: "checklist",
};

function Card({
  title,
  body,
  type,
  initialPosition = { x: 300, y: 300 },
  size,
  id,
  isCollapsed,
}) {
  // State to manage the card's position
  const [position, setPosition] = useState(initialPosition);
  const [isResizing, setIsResizing] = useState(false);
  const {
    removeCardFromCanvas,
    updateCardTitle,
    udpateCardBody,
    updateCardPosition,
    updateCardSize,
    toggleCollapse,
  } = useCanvasContext();

  // Give draggable behavior
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled: isResizing,
  });

  const dragStyle = {
    transform: `translate(${(transform?.x || 0) + position.x}px, ${
      (transform?.y || 0) + position.y
    }px) `,
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

  useEffect(() => {
    updateCardPosition(position, id);
  }, [position]);

  function onDelete() {
    removeCardFromCanvas(id);
  }

  function updateTitle(event) {
    updateCardTitle(event?.target?.value, id);
  }

  function updateBody(newBody) {
    udpateCardBody(newBody, id);
  }

  function handleResizeStart(e) {
    e.stopPropagation();
    setIsResizing(true);
  }
  function handleResizeStop(e, { size }) {
    updateCardSize(size, id);
    setIsResizing(false);
  }

  function getCardWidth() {
    return size.width ? size.width : 300;
  }

  function getCardHeight() {
    if (isCollapsed) return 52;
    return size.height ? size.height : 400;
  }

  return (
    <ResizableBox
      className="box"
      width={getCardWidth()}
      height={getCardHeight()}
      style={dragStyle}
      onResizeStart={handleResizeStart} // Disable dragging
      onResizeStop={handleResizeStop} // Enable dragging
      minConstraints={[200, 200]}
      maxConstraints={[700,700]}
      axis={isCollapsed ? "none" : "both"}
    >
      <div
        className="card draggable"
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        onPointerUp={handleDragEnd} // Update position when drag ends
        onMouseDown={(e) => e.stopPropagation()}
        id={id}
      >
        <ContextualMenu onDelete={onDelete} />
        {type !== CARD_TYPE.LINK && (
          <Collapsible
            title={title}
            setTitle={updateTitle}
            titleStyle="card-title"
            isOpen={!isCollapsed}
            toggleCollapsible={() => toggleCollapse(id)}
          >
            {type === CARD_TYPE.TEXT && (
              <Card_Text body={body} setBody={updateBody} />
            )}
            {type === CARD_TYPE.CHECKLIST && (
              <Card_CheckList body={body} setBody={updateBody} />
            )}
          </Collapsible>
        )}

        {type === CARD_TYPE.LINK && (
          <Card_Link body={body} setBody={updateBody} />
        )}
      </div>
    </ResizableBox>
  );
}

export default Card;
export { CARD_TYPE };
