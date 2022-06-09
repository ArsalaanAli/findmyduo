import { React, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Utilities/UserContext";
import "./nav.css";

//https://cdn.discordapp.com/avatars/{user_id}/{user_avatar}.png

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [user]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  if (loggedIn) {
    return (
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            FINDMY
          </Link>
          <ul className={"nav-menu" + (navActive ? " active" : "")}>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                FIND A DUO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                FIND A TEAM
              </Link>
            </li>
            <li className="nav-item">
              <h2 className="username">{user["username"]}</h2>
              <img
                src={
                  "https://cdn.discordapp.com/avatars/" +
                  user["id"] +
                  "/" +
                  user["avatar"] +
                  ".png"
                }
                className="userAvatar"
              ></img>
            </li>
          </ul>
          <div
            className={"hamburger" + (navActive ? " active" : "")}
            onClick={toggleNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            FINDMY
          </Link>
          <ul className={"nav-menu" + (navActive ? " active" : "")}>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                FIND A DUO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                FIND A TEAM
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                LOGIN
              </Link>
            </li>
          </ul>
          <div
            className={"hamburger" + (navActive ? " active" : "")}
            onClick={toggleNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    );
  }
}
export default Navbar;
