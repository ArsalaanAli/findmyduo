import { React, useContext, useEffect, useRef } from "react";
import { ref, set } from "firebase/database";
import { UserContext } from "../Utilities/UserContext";
import "./Frontpage.css";
import databaseRef from "../Utilities/firebase";

function Frontpage(props) {
  const { REACT_APP_SECRET, REACT_APP_CLIENT_ID } = process.env;
  const loggedIn = useRef(false);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    console.log(databaseRef);
    const url = window.location.href;
    if (url.includes("?") && !loggedIn.current) {
      const params = new URL(url);
      const code = params.searchParams.get("code");
      const resp = DiscordPostRequest(code);
      console.log(resp);
    }
  }, []);

  const DiscordPostRequest = async (code) => {
    let options = {
      url: "https://discord.com/api/oauth2/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_SECRET,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000",
      }),
    };
    var site = await fetch("https://discord.com/api/v10/oauth2/token", options);
    GetUserData(await site.json());
    return site;
  };
  const GetUserData = async (resp) => {
    if (loggedIn.current) {
      return;
    }
    let options = {
      url: "https://discordapp.com/api/users/@me",
      method: "GET",
      headers: {
        Authorization: "Bearer " + resp["access_token"],
      },
    };
    var userResponse = await fetch(
      "https://discordapp.com/api/users/@me",
      options
    );
    const userData = await userResponse.json();
    console.log(userData);
    setUser(userData);
    loggedIn.current = true;
  };

  return (
    <div className="container">
      <h1 className="title">A SUBTITLE </h1>
      {/* <h2>hello {JSON.stringify(user)}</h2> */}
      <div className="renderContainer"></div>
    </div>
  );
}

export default Frontpage;
