import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

function Card({ title, body }) {
    // State to manage the card's position
    const [position, setPosition] = useState({ x: 200, y: 300 });

    // Give draggable behavior
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "draggable",
    });

    // Calculate the style by combining the current position and the drag offset
    const style = {
        transform: `translate3d(${(transform?.x || 0) + position.x}px, ${(transform?.y || 0) + position.y}px, 0)`,
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

    return (
        <div
            className="card"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onPointerUp={handleDragEnd} // Update position when drag ends
        >
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{body}</p>
        </div>
    );
}

export default Card;
