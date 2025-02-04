import { useRef } from "react";
import Canvas from "./components/Canvas";
import CanvasMenu from "./components/CanvasMenu";
import Card from "./components/Card";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { useCanvasContext } from "./context/CanvasContext";

function App() {
  //const parentRef = useRef();
  const {cardList} = useCanvasContext()
  return (
    <>
      <Header />
      <SideMenu />
      <CanvasMenu/>
      <Canvas>
        {cardList.map((card)=>
        <Card key={card.id} title={card.title} body={card.body} id={card.id} initialPosition={card.initialPosition}/>
         )}
      </Canvas>
    </>
  );
}

export default App;
