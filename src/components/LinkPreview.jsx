import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_JSONLINK_API_KEY;
const STATE = { IDLE:"idle", LOADING:"loading", PREVIEW:"preview", ERROR:"error" };

function LinkPreview({ url }) {
  const [previewData, setPreviewData] = useState(null);
  //preview data {title, description, images[]}
  const [state, setState] = useState(STATE.IDLE);

  function getEndPoint(url) {
    return `https://jsonlink.io/api/extract?url=${url}&api_key=${API_KEY}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      setState(STATE.LOADING);
      try {
        const response = await fetch(getEndPoint(url));
        if (!response.ok) {
          setState(STATE.ERROR);
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setPreviewData(data);
        setState(STATE.PREVIEW);
      } catch (error) {
        console.error("An error occurred:", error);
        setState(STATE.ERROR);
      }
    };

    fetchData();
  }, [url]);

  const previewDisplay = (
    <div className="link-preview">
      {previewData && (
        <>
          {previewData.images && (
            <img className="link-preview-image" src={previewData.images[0]} />
          )}
          <h2 className="link-preview-title"><a target="_blank" href={url}>{previewData.title} {" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          <p className="link-preview-description">{previewData.description}</p>
        </>
      )}
    </div>
  );

  const loadingDisplay = (<p>Fetching resources...</p>)

  const errorDisplay = (<p>Url does not exists or does not have preview info.</p>)




  return <>
  {state === STATE.PREVIEW && previewDisplay}
  {state === STATE.LOADING && loadingDisplay}
  {state === STATE.ERROR && errorDisplay}
  </>;
}

export default LinkPreview;
