import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContextualMenu({ onDelete, isFocused }) {
  return (
    <div
      className="contextual-menu"
      style={isFocused ? { pointerEvents: "all"} : { pointerEvents: "none" }}
    >
      <ul className="contextual-menu-actions">
        {/*<li>
          <FontAwesomeIcon
            icon={faPen}
            onClick={onEdit}
            onPointerDown={(e) => e.stopPropagation()}
          />
        </li>*/}
        <li>
          <button onClick={onDelete}>
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ pointerEvents: "none" }}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
