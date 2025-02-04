import { DndContext, useSensor, useSensors } from "@dnd-kit/core";
import Canvas from "./components/Canvas";
import CanvasMenu from "./components/CanvasMenu";
import Card from "./components/Card";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { useCanvasContext } from "./context/CanvasContext";
import CustomPointerSensor from "./dnd-kit/CustomPointerSensor";

function App() {
  //const parentRef = useRef();
  const { cardList } = useCanvasContext();

  // Initialize the custom sensor
  const myPointerSensor = useSensor(CustomPointerSensor);

  // Combine sensors into an array
  const sensors = useSensors(myPointerSensor);

  return (
    <DndContext autoScroll={false} sensors={sensors}>
      <Header />
      <SideMenu />
      <CanvasMenu />
      <Canvas>
        {cardList.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            body={card.body}
            id={card.id}
            type={card.type}
            initialPosition={card.initialPosition}
          />
        ))}
      </Canvas>
    </DndContext>
  );
}

export default App;
