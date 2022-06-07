import { React, useState } from "react";
import "./nav.css";
function Navbar(props) {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  if (!props.loggedIn) {
    return (
      <header className="header">
        <nav className="navbar">
          <a href="/#" className="nav-logo">
            FINDMY
          </a>
          <ul className={"nav-menu" + (navActive ? " active" : "")}>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                FIND A DUO
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                FIND A TEAM
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                LOGIN
              </a>
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
        <h1>{props.name}</h1>
      </header>
    );
  }
}
export default Navbar;
