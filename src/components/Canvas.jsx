import { useDroppable } from "@dnd-kit/core"

function Canvas({children}){
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable'
    })

    return(
        <div className="canvas-container" ref={setNodeRef}>
            {children}
        </div>
    )
}

export default Canvas