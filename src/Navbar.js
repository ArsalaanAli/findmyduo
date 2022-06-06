import { React, useState } from "react";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/#" className="nav-logo">
          FindMyDuo
        </a>
        <ul className={"nav-menu" + (navActive ? " active" : "")}>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              Contact
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
    </header>
  );
}
export default Navbar;
