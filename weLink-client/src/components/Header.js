import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import Homepage from "./Homepage.js";
import Filter1 from "./Filter1.js";
import Filter2 from "./Filter2.js";
import Filter3 from "./Filter3.js";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="header">
            <div className="menu-container">
              <NavLink className="header-menu-text" exact to="/">
                LOGO
              </NavLink>
              <div className="searchheader">
                <NavLink to="/filter1">Women</NavLink>
                <NavLink to="/filter2">Men</NavLink>
                <NavLink to="/filter3">Other</NavLink>
              </div>
            </div>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/filter1" component={Filter1} />
          <Route path="/filter2" component={Filter2} />
          <Route path="/filter3" component={Filter3} />
        </Switch>
      </div>
    );
  }
}

export default Header;
