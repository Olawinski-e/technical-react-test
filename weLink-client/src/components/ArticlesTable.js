import React, { Component } from "react";
import contacts from "./../contacts.json";
import FilterNav from "./FilterNav.js";

import "./ArticlesTable.css";

class ArticlesTable extends Component {
  constructor(props) {
    super(props);

    this.state = { contactArray: contacts.slice(0, 9) };
  }

  render() {
    const { contactArray } = this.state;
    return (
      <section className="articles-table-page">
        <div className="page-title-and-filters">
          <h3 className="page-title">Page Title</h3>
          <FilterNav />
        </div>
        const men = contactArray.filter (contact => contact.filter === "men");
        const women = contactArray.filter(contact => contact.filter ===
        "women"); const other = contactArray.filter(contact => contact.filter
        === "other");
        <div className="table">
          {contactArray.map((oneFilter, index) => {
            return (
              <div className="div-image">
                <img
                  src={oneFilter.pictureUrl}
                  className="image"
                  alt="image2"
                />
                <h3>{oneFilter.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ArticlesTable;
