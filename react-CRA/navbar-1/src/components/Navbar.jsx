import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="Navbar">
      {/* // ! "Link" should always be used with "BrowserRouter" Context API */}
      <div className="Navbar-header">
        <Link>
          <h1>LOGO</h1>
        </Link>
        <span onClick={() => setShowMenu((prevState) => !prevState)}>
          <MenuIcon />
        </span>
      </div>

      <ul className={showMenu ? "open" : ""}>
        <li>
          {/* // ! NavLink can be used to indicate the current "active link" */}
          {/* // ! When the current route matches "to" props of a "NavLink" component, the "active" class will be applied */}
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
