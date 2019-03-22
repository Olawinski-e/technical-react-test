import React, { Component } from "react";
import contactArray from "./../contacts.json";

import ArticlesTable from "./ArticlesTable.js";

import "./FilterNav.css";

class FilterNav extends Component {
  state = {
    all: [],
    men: [],
    women: [],
    other: []
  };

  handler = evt => {
    const check = evt.target.getAttribute("data-is");
    console.log(check);
  };

filterdata = 

  const men = contactArray.filter (contact => contact.filter === "men");

  const women = contactArray.filter(contact => contact.filter ===
  "women"); 
  
  const other = contactArray.filter(contact => contact.filter
  === "other");


  render() {
    const { handler } = this;
    return (
      <section className="filter-nav">
        <form onChange={filterdata} >
          <label>
            <input
              type="radio"
              data-is="women"
              onChange={handler}
              name="filter"
            />
            women
          </label>
          <label>
            <input
              type="radio"
              data-is="men"
              onChange={handler}
              name="filter"
            />
            men
          </label>
          <label>
            <input
              type="radio"
              data-is="other"
              onChange={handler}
              name="filter"
            />
            other
          </label>
        </form>

        <ArticlesTable />
      </section>
    );
  }
}

export default FilterNav;
