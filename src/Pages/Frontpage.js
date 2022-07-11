import { React, useContext, useEffect, useRef } from "react";
import render from "../Assets/mainRender.png";
import "./Frontpage.css";

function Frontpage(props) {
  return (
    <div className="container">
      <div className="titleHolder">
        <p className="title">LOREM IPSUM</p>
      </div>
      <div className="imgHolder">
        <img src={render} className="render" alt="jett and phoenix" />
      </div>
    </div>
  );
}

export default Frontpage;
