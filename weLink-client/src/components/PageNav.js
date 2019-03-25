import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./PageNav.css";

class PageNav extends Component {
  render() {
    const contactArray = this.props.selection;
    var pageFloor = Math.floor(contactArray.length / 9);
    var pageStart = [];
    for (var i = 0; i < pageFloor; i++) {
      pageStart.push(i * 9);
    }
    const pageEnd = pageStart.map(oneIndex => {
      return oneIndex + 9;
    });
    if (contactArray.length / 9 !== 0) {
      pageStart.push(pageFloor * 9);
      pageEnd.push(pageFloor * 9 + (contactArray.length % 9));
    }
    var pageButtons = [];
    for (i = 1; i <= pageStart.length; i++) {
      pageButtons.push(i);
    }

    return (
      <footer>
        <nav className="header">
          <div className="menu-container ">
            <div className="searchheader bottom-align">
              {pageButtons.map((oneButton, index) => {
                return (
                  <Link
                    to="#"
                    onClick={event =>
                      this.props.onPage(event, pageStart[index], pageEnd[index])
                    }
                  >
                    {oneButton}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </footer>
    );
  }
}

export default PageNav;
