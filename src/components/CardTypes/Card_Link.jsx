import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LinkPreview from "../LinkPreview";

function Card_Link({ body, setBody }) {
  const [link, setLink] = useState("");

  function onSubmit() {
    if (body.startsWith("www")){
      const httpLink = "https://" + body
      setLink(httpLink);
      setBody(httpLink)
    }else{
      setLink(body)
    }
  }

  function handleOnKeyDown(event){
    if (event?.key === "Enter"){
      onSubmit()
    }
  }

  return (
    <>
      {link && <LinkPreview url={link} />}
      <input
        className="card-content"
        type="text"
        value={body}
        onChange={setBody}
        placeholder="Enter link"
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={onSubmit} title="Fetch url information" >
        <FontAwesomeIcon icon={faWifi} style={{ pointerEvents: "none" }} />
      </button>
    </>
  );
}

export default Card_Link;
