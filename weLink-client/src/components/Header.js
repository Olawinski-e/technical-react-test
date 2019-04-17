import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { NavLink, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
import Filter1 from "./Filter1.js";
import Filter2 from "./Filter2.js";
import Filter3 from "./Filter3.js";
>>>>>>> 5064ea2da7f4101faefdf6109b40bbdc847b3fb8
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
<<<<<<< HEAD
                <Link name="women" onClick={event => this.props.onLink(event)}>Women</Link>
                <Link name="men" onClick={event => this.props.onLink(event)}>Men</Link>
                <Link name="other" onClick={event => this.props.onLink(event)}>Other</Link>
=======
                <NavLink
                  name="women"
                  to="/filter1"
                  onClick={event => this.props.onLink(event)}
                >
                  Women
                </NavLink>
                <NavLink
                  name="men"
                  to="/filter2"
                  onClick={event => this.props.onLink(event)}
                >
                  Men
                </NavLink>
                <NavLink
                  name="other"
                  to="/filter3"
                  onClick={event => this.props.onLink(event)}
                >
                  Other
                </NavLink>
>>>>>>> 5064ea2da7f4101faefdf6109b40bbdc847b3fb8
              </div>
            </div>
          </nav>
        </header>
<<<<<<< HEAD
=======
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/filter1" component={Filter1} />
          <Route path="/filter2" component={Filter2} />
          <Route path="/filter3" component={Filter3} />
        </Switch>
>>>>>>> 5064ea2da7f4101faefdf6109b40bbdc847b3fb8
      </div>
    );
  }
}

export default Header;
