import React, { Component } from "react";
import contactArray from "./../contacts.json";

import ArticlesTable from "./ArticlesTable.js";

import "./FilterNav.css";

class FilterNav extends Component {
  state = {
    dataFilter: contactArray,
    women: true,
    men: true,
    other: true
    // array coché ou non

    // soit array vide = tout
    // soit array = choix
  };

  handler = evt => {
    const check = evt.target.getAttribute("data-is");
    console.log("CHECK", check);

    const selection = contactArray.filter(oneContact => {
      return oneContact.filter === check;
    });

    console.log("SELECTION", selection);
    this.setState({
      dataFilter: selection
    });
  };

  allWomen() {
    this.setState({
      women: true,
      men: false,
      other: false
    });
  }

  allMen() {
    this.setState({
      women: false,
      men: true,
      other: false
    });
  }

  allOther() {
    this.setState({
      women: false,
      men: false,
      other: true
    });
  }

  //   const men = contactArray.filter (contact => contact.filter === "men");

  //   const women = contactArray.filter(contact => contact.filter === "women");

  //   const other = contactArray.filter(contact => contact.filter === "other");

  render() {
    const { handler } = this;
    return (
      <section className="filter-nav">
        <form>
          <label>
            <input
              type="checkbox"
              data-is="women"
              onChange={handler}
              name="filter"
            />
            women
          </label>
          <label>
            <input
              type="checkbox"
              data-is="men"
              onChange={handler}
              name="filter"
            />
            men
          </label>
          <label>
            <input
              type="checkbox"
              data-is="other"
              onChange={handler}
              name="filter"
            />
            other
          </label>
        </form>

        <ArticlesTable selection={this.state.dataFilter} />
      </section>
    );
  }
}

export default FilterNav;
