import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCanvasContext } from "../context/CanvasContext";

const CARD_TYPE = {TEXT:"text"}

function SideMenu() {
  const {addCardToCanvas} = useCanvasContext()

  function spawnCard(type){
    const newCard = {title: "This is a text card", body:"This is a body of the card"}
    addCardToCanvas(newCard)
  }


  return <menu className="side-menu">
    <ul className="side_menu_actions">
        <li><FontAwesomeIcon icon={faFont} className="icon-l clickable" onClick={()=>spawnCard(CARD_TYPE.TEXT)}/></li>
        <li>OP2</li>
    </ul>
  </menu>;
}

export default SideMenu;
