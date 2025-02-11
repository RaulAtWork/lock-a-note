import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  return (
    <>
      <p>Proyect created with ♡ by Raul Escabia</p>
      <p>
        Here is a link to{" "}
        <a
          href="https://github.com/RaulAtWork/lock-a-note"
          target="_blank"
          className="secondary-text"
        >
          github repo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        . Share and leave a star.
      </p>
      <br/>
      <p className="secondary-text">MIT License / Copyright (c) 2025 RaulAtWork</p>
    </>
  );
}

export default AboutMe;
