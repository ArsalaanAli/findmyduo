import { React, useContext, useEffect, useRef } from "react";
import { UserContext } from "../Utilities/UserContext";
import { useSearchParams } from "react-router-dom";
import AttempLogin from "../Utilities/LoginFunctions";
import "./Frontpage.css";

function Frontpage(props) {
  const loggedIn = useRef(false);
  const setUser = useContext(UserContext)[1];
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    AttempLogin(loggedIn, setUser, searchParams, setSearchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>hello</h1>;
}

export default Frontpage;
