import { React, useEffect } from "react";
import "./Frontpage.css";

function Frontpage(props) {
  const { REACT_APP_SECRET, REACT_APP_CLIENT_ID } = process.env;
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("?")) {
      const params = new URL(url);
      const code = params.searchParams.get("code");
      const resp = DiscordPostRequest(code);
      console.log(resp);
    }
  }, []);

  const DiscordPostRequest = async (code) => {
    console.log(REACT_APP_CLIENT_ID, REACT_APP_SECRET, code);
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
    var site = await fetch("https://discord.com/api/v10/oauth2/token", options)
      .then((response) => response.json)
      .then((resp) => console.log(resp));
    return site;
  };

  return (
    <div className="container">
      <h1 className="title">TIRED OF TOXIC TEAMATES?</h1>
      <div className="renderContainer"></div>
    </div>
  );
}

export default Frontpage;
