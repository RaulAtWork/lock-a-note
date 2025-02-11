import { useState } from "react";
import ModalWindow from "./ModalWidnow";
import AboutMe from "../pages/AboutMe";
import Instructions from "../pages/Instructions";

const MODAL = {INSTRUCTIONS: "instructions", ABOUTME: "aboutme"}

function Header() {
const [modalData, setModalData] = useState({isOpen: false})

function handleCloseModal(){
  setModalData({isOpen: false})
}

function handleOpenModal(newModal){
  if(newModal === MODAL.INSTRUCTIONS){
    setModalData({isOpen: true, component:MODAL.INSTRUCTIONS, title:"INSTRUCTIONS"})
  }
  if(newModal === MODAL.ABOUTME){
    setModalData({isOpen: true, component:MODAL.ABOUTME, title:"ABOUT ME"})
  }
}


  return (<header>
    <h1>Lock-a-Note</h1>
    <ul className="header-buttons">
      <li><button onClick={()=>handleOpenModal(MODAL.INSTRUCTIONS)}>Instructions</button></li>
      <li><button onClick={()=>handleOpenModal(MODAL.ABOUTME)}>About me</button></li>
    </ul>

    <ModalWindow className="modal-window" title={modalData.title} isOpen={modalData.isOpen} onClose={handleCloseModal}>
      {modalData?.component === MODAL.INSTRUCTIONS && <Instructions/>}
      {modalData?.component === MODAL.ABOUTME && <AboutMe/>}
    </ModalWindow>
    
    </header>);
}

export default Header;
