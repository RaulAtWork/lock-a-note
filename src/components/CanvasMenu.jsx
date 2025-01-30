import {
  faCircleDot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCanvasContext } from "../context/CanvasContext";

function CanvasMenu() {
    const {zoom, zoomIn, zoomOut, setNewCanvasPosition} = useCanvasContext()
    let zoomFormated = (Math.round(zoom * 100) / 100).toFixed(2)
  return (
    <menu className="canvas-menu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faCircleDot} className="icon clickable" onClick={()=>{setNewCanvasPosition({x:0,y:0})}}/>
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPlus} className="icon clickable" onClick={zoomIn} />
        </li>
        <li>
          <FontAwesomeIcon icon={faMinus} className="icon clickable" onClick={zoomOut} />
        </li>
        <li>{zoomFormated}</li>
      </ul>
    </menu>
  );
}

export default CanvasMenu;
