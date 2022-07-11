import GetDiscordData from "../Utilities/GetDiscordData";

function AttempLogin(loggedIn, setUser, searchParams, setSearchParams) {
  const { REACT_APP_SECRET, REACT_APP_CLIENT_ID } = process.env;
  const url = window.location.href;

  if (searchParams === null || (url.includes("?") && !loggedIn)) {
    const params = new URL(url);
    const code = params.searchParams.get("code");
    GetDiscordData(
      code,
      REACT_APP_CLIENT_ID,
      REACT_APP_SECRET,
      setUser,
      loggedIn
    );
    searchParams.delete("code");
    setSearchParams(searchParams);
  } else if (!loggedIn) {
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    if (localUser != null) {
      setUser(localUser);
    }
  }
}

export default AttempLogin;
