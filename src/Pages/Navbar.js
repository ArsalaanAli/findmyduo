import { React, useContext, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { UserContext } from "../Utilities/UserContext";
import AttempLogin from "../Utilities/LoginFunctions";
import "./nav.css";

//https://cdn.discordapp.com/avatars/{user_id}/{user_avatar}.png

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    AttempLogin(user !== null, setUser, searchParams, setSearchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  // const navFalse = () => {
  //   console.log("asd");
  //   setNavActive(false);
  // };
  if (user !== null) {
    return (
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            FINDMY
          </Link>
          <ul className={"nav-menu" + (navActive ? " active" : "")}>
            <li className="nav-item">
              <Link to="/duo" className="nav-link">
                FIND A DUO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                FIND A TEAM
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                {user["username"]}
              </Link>
            </li>
            <img
              src={
                "https://cdn.discordapp.com/avatars/" +
                user["id"] +
                "/" +
                user["avatar"] +
                ".png"
              }
              alt="profile"
              className="userAvatar"
            ></img>
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
              <Link to="/duo" className="nav-link">
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
