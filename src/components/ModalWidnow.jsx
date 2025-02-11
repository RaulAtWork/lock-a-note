import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function ModalWindow({ title, isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog open className="modal">
        <div className="modal-header">
          <h1>{title}</h1>
          <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </dialog>
    </>
  );

  // Use ReactDOM.createPortal to attach the modal to #root
  return ReactDOM.createPortal(modalContent, document.getElementById("root"));
}

export default ModalWindow;
