import { PointerSensor } from "@dnd-kit/core";

class CustomPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown",
      handler(event) {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target)
        ) {
          return false;
        }
        return true;
      },
    },
  ];
}

function isInteractiveElement(element) {
  const interactiveElements = [
    "button",
    "input",
    "textarea",
    "select",
    "option",
  ];

  if (interactiveElements.includes(element.tagName.toLowerCase())) {
    return true;
  }

  return false;
}

export default CustomPointerSensor;
