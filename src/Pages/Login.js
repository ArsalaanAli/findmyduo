import React, { useContext } from "react";
import { UserContext } from "../Utilities/UserContext";
import "./Login.css";
function Login() {
  const discordRedirect = () => {
    window.location.href =
      "https://discord.com/api/oauth2/authorize?client_id=983893133463027794&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify";
  };

  const [user, setUser] = useContext(UserContext);

  return (
    <div className="center">
      <button className="loginButton" onClick={discordRedirect}>
        Login With Discord
      </button>
    </div>
  );
}

export default Login;
