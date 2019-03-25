import React, { Component } from "react";
import { Link } from "react-router-dom";

import Homepage from "./Homepage.js";


import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="header">
            <div className="menu-container">
              <Link className="header-menu-text" exact to="/">
                LOGO
              </Link>
              <div className="searchheader">
                <Link name="women" onClick={event => this.props.onLink(event)}>Women</Link>
                <Link name="men" onClick={event => this.props.onLink(event)}>Men</Link>
                <Link name="other" onClick={event => this.props.onLink(event)}>Other</Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
