import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="menu-container">
          <NavLink className="header-menu-text" exact to="/">
            LOGO
          </NavLink>
          <div className="searchheader">
            <NavLink to="/filter1">Women</NavLink>
            <NavLink to="/Filter2">Men</NavLink>
            <NavLink to="/Filter3">Other</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
