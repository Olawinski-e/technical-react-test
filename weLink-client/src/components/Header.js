import React, { Component } from "react";

import contactArray from "./../contacts.json";

// import SearchResults from "../Pages/SearchResults.js";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="menu-container">
          <h1 className="header-menu-text">LOGO</h1>
          <div className="searchheader">
            <a className="a1" href="#">
              Women
            </a>
            <a className="a2" href="#">
              Men
            </a>
            <a className="a3" href="#">
              Other
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
