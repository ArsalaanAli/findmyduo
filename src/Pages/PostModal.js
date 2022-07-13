import { React, useState, useEffect } from "react";
import "./PostModal.css";

export default function PostModal() {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div className="container">
      <button className="postButton" onClick={() => setModalToggle(true)}>
        hello
      </button>
      <div className={"modal " + (modalToggle ? "show" : "")}>
        <button className="closeButton" onClick={() => setModalToggle(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
