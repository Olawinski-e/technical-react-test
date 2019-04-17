import React, { Component } from "react";
import contactArray from "./../contacts.json";

import "./Filter1.css";

class Filter2 extends Component {
  state = {
    dataFilter: contactArray
  };

  handler = evt => {
    const check = evt.target.getAttribute("men");
    console.log(check);
  };

  //   const women = contactArray.filter(contact => contact.filter === "women");

  //   const other = contactArray.filter(contact => contact.filter === "other");

  render() {
    const { handler } = this;
    return (
      <div className="filter-nav">
        <section className="filter-nav">
          <div onChange={handler} />
        </section>
      </div>
    );
  }
}

export default Filter2;
