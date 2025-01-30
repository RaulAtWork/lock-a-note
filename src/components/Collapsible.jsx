import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Collapsible({ title, titleStyle, open = true, children }) {
  const [isOpen, setIsOpen] = useState(open);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible">
      <h2 className={titleStyle}>
        {!isOpen && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon clickable"
            onClick={toggleOpen}
            onPointerDown={(e) => e.stopPropagation()}
          />
        )}
        {isOpen && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="icon-secondary clickable"
            onClick={toggleOpen}
            onPointerDown={(e) => e.stopPropagation()}
          />
        )}
        {" "}{title}
      </h2>
      {isOpen && children}
    </div>
  );
}

export default Collapsible;
