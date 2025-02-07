import { faFont, faLink, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCanvasContext } from "../context/CanvasContext";
import { CARD_TYPE } from "./Card";
import { v4 as uuidv4 } from "uuid";

function SideMenu() {
  const { addCardToCanvas } = useCanvasContext();

  function spawnCard(type) {
    let defaultBody = "";

    if (type === CARD_TYPE.CHECKLIST) {
      defaultBody = [
        {
          id: uuidv4(),
          completed: false,
          task: "",
        },
      ];
    }

    const newCard = {
      title: "",
      body: defaultBody,
      type: type,
    };
    addCardToCanvas(newCard);
  }

  return (
    <menu className="side-menu">
      <ul className="side-menu-actions">
        <li>
          <button onClick={() => spawnCard(CARD_TYPE.TEXT)} title="Text Card">
            <FontAwesomeIcon icon={faFont} className="icon-l" />
          </button>
        </li>
        <li>
          <button onClick={() => spawnCard(CARD_TYPE.LINK)} title="Link Card">
            <FontAwesomeIcon icon={faLink} className="icon-l" />
          </button>
        </li>
        <li>
          <button
            onClick={() => spawnCard(CARD_TYPE.CHECKLIST)}
            title="Check List"
          >
            <FontAwesomeIcon icon={faList} className="icon-l" />
          </button>
        </li>
      </ul>
    </menu>
  );
}

export default SideMenu;
