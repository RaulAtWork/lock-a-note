import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCanvasContext } from "../context/CanvasContext";
import { CARD_TYPE } from "./Card";

function SideMenu() {
  const { addCardToCanvas } = useCanvasContext();

  function spawnCard(type) {
    const newCard = {
      title: "",
      body: "",
      type: type,
    };
    addCardToCanvas(newCard);
  }

  return (
    <menu className="side-menu">
      <ul className="side_menu_actions">
        <li>
          <button onClick={() => spawnCard(CARD_TYPE.TEXT)}>
            <FontAwesomeIcon icon={faFont} className="icon-l" />
          </button>
        </li>
        <li>OP2</li>
      </ul>
    </menu>
  );
}

export default SideMenu;
