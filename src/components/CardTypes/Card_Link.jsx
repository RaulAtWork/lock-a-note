import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LinkPreview from "../LinkPreview";

function Card_Link({ body, setBody }) {
  const [link, setLink] = useState("");

  function onSubmit() {
    if (body.startsWith("www")) {
      const httpLink = "https://" + body;
      setLink(httpLink);
      setBody(httpLink);
    } else {
      setLink(body);
    }
  }

  function handleOnKeyDown(event) {
    if (event?.key === "Enter") {
      onSubmit();
    }
  }

  function onChange(event) {
    setBody(event.target.value);
  }

  return (
    <>
      <LinkPreview url={link} />
      <input
        className="card-content link-card"
        type="text"
        value={body}
        onChange={onChange}
        placeholder="Enter link"
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={onSubmit} title="Fetch url information">
        <FontAwesomeIcon icon={faWifi} style={{ pointerEvents: "none" }} />
      </button>
    </>
  );
}

export default Card_Link;
