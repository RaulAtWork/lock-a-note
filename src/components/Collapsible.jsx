import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Collapsible({ title, setTitle, titleStyle, isOpen = true, children, toggleCollapsible }) {

  return (
    <div className="collapsible">
      <h2 className={titleStyle}>
        {!isOpen && (
          <button onClick={toggleCollapsible}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon"
              style={{ pointerEvents: "none" }}
            />
          </button>
        )}
        {isOpen && (
          <button onClick={toggleCollapsible}>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="icon-secondary"
              style={{ pointerEvents: "none" }}
            />
          </button>
        )}
        <input type="text" value={title} onChange={setTitle} placeholder="Title"/>
      </h2>
      {isOpen && children}
    </div>
  );
}

export default Collapsible;
