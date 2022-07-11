export default function GetDiscordData(
  code,
  REACT_APP_CLIENT_ID,
  REACT_APP_SECRET,
  setUser,
  loggedIn
) {
  const DiscordPostRequest = async () => {
    console.log(code, REACT_APP_CLIENT_ID, REACT_APP_SECRET);
    const data_1 = new URLSearchParams();
    data_1.append("client_id", REACT_APP_CLIENT_ID);
    data_1.append("client_secret", REACT_APP_SECRET);
    data_1.append("grant_type", "authorization_code");
    data_1.append("redirect_uri", `http://localhost:3000`);
    data_1.append("scope", "identify");
    data_1.append("code", code);
    await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: data_1,
    })
      .then((response) => response.json())
      .then((data) => {
        GetUserData(data);
      });
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
    if (!("username" in userData)) {
      return;
    }
    console.log(userData);
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };
  DiscordPostRequest();
}
