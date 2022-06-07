import { React, useState } from "react";
import { Link } from "react-router-dom";
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
        <h1>{props.name}</h1>
      </header>
    );
  }
}
export default Navbar;
