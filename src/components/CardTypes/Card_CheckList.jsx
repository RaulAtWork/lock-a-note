import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Card_CheckList({ body, setBody }) {
  //{id: string, completed: true/false, task: String}

  const ulRef = useRef(null); // Reference to the <ul> element

  useEffect(() => {
    // Callback function to handle mutations on the list
    const observerCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          console.log("New child added:", mutation.addedNodes[0]); // Log the new child
          // Get the newly added node
          const newChild = mutation.addedNodes[0];
          // Find the input[type="text"] inside the new child and focus it
          const inputElement = newChild.querySelector('input[type="text"]');
          if (inputElement) {
            inputElement.focus(); // Focus the input element
          }
        }
      }
    };

    // Create a MutationObserver instance
    const observer = new MutationObserver(observerCallback);

    // Start observing the <ul> element for child additions
    if (ulRef.current) {
      observer.observe(ulRef.current, { childList: true });
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [, ulRef]);

  function onCheckbox(id, event) {
    //event.target.value
    const newbody = body.map((item) => {
      let newItem = item;
      if (item.id === id) {
        newItem.completed = event.target.checked;
      }
      return newItem;
    });
    setBody(newbody);
  }

  function onInputText(id, event) {
    //event.target.value
    const newbody = body.map((item) => {
      let newItem = item;
      if (item.id === id) {
        newItem.task = event.target.value;
      }
      return newItem;
    });
    setBody(newbody);
  }

  function handleOnKeyDown(event, currentIndex) {
    if (event?.key === "Enter") {
      // Create a new checklist item
      const newItem = { id: uuidv4(), completed: false, task: "" };

      // Insert the new item at the next index
      const newBody = [
        ...body.slice(0, currentIndex + 1), // Items before the current index
        newItem, // New item
        ...body.slice(currentIndex + 1), // Items after the current index
      ];

      setBody(newBody);
    }
  }

  return (
    <ul className="check-list card-content" ref={ulRef}>
      {body?.map((checkItem, index) => (
        <li
          className={`check-task ${checkItem.completed ? "completed" : ""}`}
          key={checkItem.id}
        >
          <input
            type="checkbox"
            checked={checkItem.completed ? true : false}
            onChange={(event) => onCheckbox(checkItem.id, event)}
          />{" "}
          <input
            type="text"
            value={checkItem.task}
            onChange={(event) => onInputText(checkItem.id, event)}
            placeholder="Enter your task"
            onKeyDown={(event)=> handleOnKeyDown(event, index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Card_CheckList;
