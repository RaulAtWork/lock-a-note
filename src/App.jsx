import Canvas from "./components/Canvas";
import CanvasMenu from "./components/CanvasMenu";
import Card from "./components/Card";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <Header />
      <SideMenu />
      <CanvasMenu/>
      <Canvas>
        <Card title="Title Sample" body="This is a text on the body " />
      </Canvas>
    </>
  );
}

export default App;
