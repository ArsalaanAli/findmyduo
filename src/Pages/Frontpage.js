import { React, useContext, useEffect, useRef } from "react";
import { UserContext } from "../Utilities/UserContext";
import GetDiscordData from "../Utilities/GetDiscordData";
import "./Frontpage.css";

function Frontpage(props) {
  const { REACT_APP_SECRET, REACT_APP_CLIENT_ID } = process.env;
  const loggedIn = useRef(false);
  const setUser = useContext(UserContext)[1];

  useEffect(() => {
    const url = window.location.href;
    console.log(loggedIn.current);
    if (url.includes("?") && !loggedIn.current) {
      const params = new URL(url);
      const code = params.searchParams.get("code");
      const resp = GetDiscordData(
        code,
        REACT_APP_CLIENT_ID,
        REACT_APP_SECRET,
        setUser,
        loggedIn
      );
      console.log(resp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>hello</h1>;
}

export default Frontpage;
