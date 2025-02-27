import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { welcomeCards } from "./WelcomeCards";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";

// Create the ZoomContext
const CanvasContext = createContext();
const ZOOM_STEP = 0.1;

// ZoomProvider component to wrap the app and provide zoom state
export function CanvasProvider({ children }) {
  const [zoom, setZoom] = useState(1); // Default zoom level is 1 (100%)
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [cardList, setCardList] = useState(() => {
    var storedCardList = JSON.parse(localStorage.getItem("cardList"));
    return storedCardList ? storedCardList : welcomeCards;
  });

  useEffect(() => {
    //save data everytime a change is done on the card list
    localStorage.setItem("cardList", JSON.stringify(cardList));
  }, [cardList]);

  // Function to zoom in
  const zoomIn = () => applyZoom(+ZOOM_STEP);

  // Function to zoom out
  const zoomOut = () => applyZoom(-ZOOM_STEP);

  function applyZoom(increment) {
    setZoom((prevZoom) => {
      // Min zoom: 0.5x
      let num = Math.max(prevZoom + increment, 0.5);
      // Max zoom: 2x
      num = Math.min(num, 2);
      // round to  decimals
      return Number((Math.round(num * 100) / 100).toFixed(2));
    });
  }

  // Recalculate canvas coordiantes when we change the zoom
  useEffect(() => {
    setNewCanvasPosition({ x: canvasPosition.x, y: canvasPosition.y });
  }, [zoom]);

  function setNewCanvasPosition({ x, y }) {
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    let vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    const effectiveCanvasWidth = vw * 3 * zoom;
    const effectiveCanvasHeight = vh * 3 * zoom;

    // Apply boundary constraints
    const constrainedX = Math.min(0, Math.max(x, vw - effectiveCanvasWidth));
    const constrainedY = Math.min(0, Math.max(y, vh - effectiveCanvasHeight));

    setCanvasPosition({ x: constrainedX, y: constrainedY });
  }

  function addCardToCanvas({
    title,
    body,
    type,
    initialPosition = { x: 300, y: 300 },
  }) {
    let size = {width: 250, height: 300}

    let newID = uuidv4();
    setCardList([
      ...cardList,
      { title, body, initialPosition, type, id: newID, size, collapsed: false },
    ]);
  }

  function removeCardFromCanvas(id) {
    const filteredCardList = cardList.filter((card) => card.id !== id);
    //console.log(id, filteredCardList)
    setCardList(filteredCardList);
  }

  function updateCardTitle(newTitle, id) {
    const udpatedList = cardList.map((card) => {
      if (card.id === id) {
        card.title = newTitle;
      }
      return card;
    });

    setCardList(udpatedList);
  }

  function udpateCardBody(newBody, id) {
    const udpatedList = cardList.map((card) => {
      if (card.id === id) {
        card.body = newBody;
      }
      return card;
    });

    setCardList(udpatedList);
  }
  function updateCardPosition(newPosition, id) {
    const udpatedList = cardList.map((card) => {
      if (card.id === id) {
        card.initialPosition = newPosition;
      }
      return card;
    });

    setCardList(udpatedList);
  }

  function updateCardSize(newSize, id){
    const udpatedList = cardList.map((card) => {
      if (card.id === id) {
        card.size = newSize; //{width, height}
      }
      return card;
    });

    setCardList(udpatedList);
  }

  function toggleCollapse(id){
    const udpatedList = cardList.map((card) => {
      if (card.id === id) {
        card.collapsed = card.collapsed? !card.collapsed : true; //{width, height}
      }
      return card;
    });

    setCardList(udpatedList);
  }

  return (
    <CanvasContext.Provider
      value={{
        zoom,
        zoomIn,
        zoomOut,
        canvasPosition,
        setNewCanvasPosition,
        cardList,
        addCardToCanvas,
        removeCardFromCanvas,
        updateCardPosition,
        updateCardTitle,
        udpateCardBody,
        updateCardSize,
        toggleCollapse
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

// Custom hook to use the ZoomContext
export function useCanvasContext() {
  return useContext(CanvasContext);
}
