import {
  faCircleDot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCanvasContext } from "../context/CanvasContext";

function CanvasMenu() {
  const { zoom, zoomIn, zoomOut, setNewCanvasPosition } = useCanvasContext();
  let zoomFormated = (Math.round(zoom * 100)).toFixed(0) + "%";
  return (
    <menu className="canvas-menu">
      <ul>
        <li>
          <button
            onClick={() => {
              setNewCanvasPosition({ x: 0, y: 0 });
            }}
          >
            <FontAwesomeIcon icon={faCircleDot} className="icon clickable" />
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={zoomIn}>
            <FontAwesomeIcon icon={faPlus} className="icon clickable" />
          </button>
        </li>
        <li>{zoomFormated}</li>
        <li>
          <button onClick={zoomOut}>
            <FontAwesomeIcon icon={faMinus} className="icon clickable" />
          </button>
        </li>
      </ul>
    </menu>
  );
}

export default CanvasMenu;
