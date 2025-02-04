import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Collapsible({ title, setTitle, titleStyle, open = true, children }) {
  const [isOpen, setIsOpen] = useState(open);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible">
      <h2 className={titleStyle}>
        {!isOpen && (
          <button onClick={toggleOpen}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon"
              style={{ pointerEvents: "none" }}
            />
          </button>
        )}
        {isOpen && (
          <button onClick={toggleOpen}>
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
