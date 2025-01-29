import { useDraggable } from "@dnd-kit/core"

function Card({title, body}){

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable'
    })

    const initialPosition = {x: 200, y:300}
    // Combine the initial position with the transform from the hook
    const style = {
        transform: `translate3d(${(transform?.x || 0) + initialPosition.x}px, ${(transform?.y || 0) + initialPosition.y}px, 0)`,
    };

    return (
        <div className="card" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{body}</p>
        </div>
    )

}

export default Card