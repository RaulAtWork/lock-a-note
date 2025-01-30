import { useDroppable } from "@dnd-kit/core"

function Canvas({children}){
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable'
    })
    // isOver will become true when you move a dropable element on top of it

    return(
        <div className="canvas-container" ref={setNodeRef}>
            {children}
        </div>
    )
}

export default Canvas