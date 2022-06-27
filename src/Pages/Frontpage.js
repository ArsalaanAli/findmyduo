import { React, useContext, useEffect, useRef } from "react";
import { UserContext } from "../Utilities/UserContext";
import { useSearchParams } from "react-router-dom";
import AttempLogin from "../Utilities/LoginFunctions";
import render from "../Assets/mainRender.png";
import "./Frontpage.css";

function Frontpage(props) {
  const loggedIn = useRef(false);
  const setUser = useContext(UserContext)[1];
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    AttempLogin(loggedIn, setUser, searchParams, setSearchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="titleHolder">
        <p className="title">TIRED OF TOXIC TEAMMATES?</p>
        <h1 className="subtitle">HERE IS THE SUBTITLE WHICH IS LONGER</h1>
      </div>
      <div className="imgHolder">
        <img src={render} className="render" alt="jett and phoenix" />
      </div>
    </div>
  );
}

export default Frontpage;
