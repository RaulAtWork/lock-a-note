import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { CARD_TYPE } from "../components/Card";
//{ title, body, initialPosition, type, id},
export const welcomeCards = [
  {
    id: "welcome_card_1",
    type: CARD_TYPE.TEXT,
    title: "Welcome to Lock-a-Note",
    body: "An application to organize your ideas into Cards!!",
    initialPosition: { x: 150, y: 100 },
    size: { width: 350, height: 200 },
  },
  {
    id: "welcome_card_2",
    type: CARD_TYPE.CHECKLIST,
    title: "Why don't you...",
    body: [
      {
        id: "wc-c-1",
        completed: false,
        task: "Create a card from the icons",
      },
      {
        id: "wc-c-11",
        completed: false,
        task: "Cards can be collapsed",
      },
      {
        id: "wc-c-2",
        completed: false,
        task: "Check out zoom at the bottom",
      },
      { id: "wc-c-3", completed: false, task: "You can also move the canvas!" },
      { id: "wc-c-4", completed: true, task: "This one is already completed" },
      {
        id: "wc-c-5",
        completed: false,
        task: "Try the link button --------->",
      },
    ],
    initialPosition: { x: 150, y: 350 },
    size: { width: 350, height: 300 },
  },
  {
    id: "welcome_card_3",
    type: CARD_TYPE.LINK,
    body: "https://www.google.com",
    initialPosition: { x: 550, y: 420 },
    size: { width: 350, height: 200 },
  },
  {
    id: "welcome_card_4",
    type: CARD_TYPE.TEXT,
    title: "In case you need...",
    body: "to remember the instructions,click the button on the top menu",
    initialPosition: { x: 550, y: 100 },
    size: { width: 350, height: 200 },
  },
];
