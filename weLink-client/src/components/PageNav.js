import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./PageNav.css";

// PageNav is placed as a footer on the page. It displays a series of buttons for each
// page of the current selection
class PageNav extends Component {


  render() {
    // (1) we want to know how many pages we need to have
    const contactArray = this.props.selection;
    // We know we want 9 contacts per page, pageFloor is the amount of 'full pages' 
    // we need. There might be another page with less than 9 contacts in it, see 
    // line 28-.37 Could be interesting to see if it works with '9' not hardcoded ^^
    var pageFloor = Math.floor(contactArray.length / 9); 
    // (2) here we store the indices of the first contact for each page
    var pageStart = [];
    for (var i = 0; i < pageFloor; i++) {
      pageStart.push(i*9);
    }
    // (3) pageEnd is the same array except we need to add 9 indices to each element
    var pageEnd = pageStart.map(oneIndex => {
      return oneIndex + 9
    })

    // (4) here we take care of the selection elements that are in the last page
    // if the selection's length is not a multiple of 9
    if (contactArray.length % 9 !== 0) {
    // (4a) the first contact to display in this last page is rather easy to define
      pageStart.push(pageFloor*9);
    // (4b) he last contact is the same index as above PLUS what remains of the 
    // selection's length when divided by 9 
      pageEnd.push((pageFloor*9) + (contactArray.length % 9));
    }

    // (5) this array tells how many page buttons there are and the values (page numbers) 
    // that are displayed in said buttons
    var pageButtons = [];
    // we populate it
    for (var i = 1; i <= pageStart.length; i++) {
      pageButtons.push(i);
    } 

    

    return (
      <footer>
        <nav className="header">
          <div className="menu-container">
            <div className="searchheader">
            {pageButtons.map((oneButton, index) => {
              return (
                // (6) Now each page button will pass the indices of the first and last 
                // contacts we want to see on their pages remember that pageButtons
                // pageStart and pageEnd have the same length, all three sort of constitute 
                // a table. These indices are passed to a method that is passed from the 
                // parent (genericSlicer() from App.js) as a prop. See App.js.
                <Link onClick={event => this.props.onPage(event, pageStart[index], pageEnd[index])} >{oneButton}</Link>
                // Maybe there is a nicer way to accomplish this, for instance
                // pageButtons could be an array of objects { pageStart, pageEnd }
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
