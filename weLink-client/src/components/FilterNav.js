import React, { Component } from "react";
import contactArray from "./../contacts.json";

import ArticlesTable from "./ArticlesTable.js";

import "./FilterNav.css";

class FilterNav extends Component {
  state = {
    dataFilter: contactArray,
    women: false,
    men: false,
    other: false,
    filters: ["women", "men", "other"]
    // array coché ou non
    // soit array vide = tout
    // soit array = choix
  };

  // handler = evt => {
  //   const check = evt.target.getAttribute("data-is");
  //   console.log("CHECK", check);

  //   const selection = contactArray.filter(oneContact => {
  //     return oneContact.filter === check;
  //   });

  //   console.log("SELECTION", selection);
  //   this.setState({
  //     dataFilter: selection
  //   });
  // };

  genericOnChange(event) {
    const { filters } = this.state;
    const { name, checked } = event.target;
    // METTRE A JOUR FILTERS
    filters.filter(oneFilter => {
      return oneFilter !== checked;
    });

    this.setState({
      [name]: checked,
      filters: filters
    });
  }

  updateSelection() {
    const { filters } = this.state;
    const selection = contactArray.filter(oneContact => {
      return filters.includes(oneContact.filter);
    });
    console.log("SELECTION", selection);
    this.setState({
      selection: selection
    });
  }

  //   const men = contactArray.filter (contact => contact.filter === "men");

  //   const women = contactArray.filter(contact => contact.filter === "women");

  //   const other = contactArray.filter(contact => contact.filter === "other");

  render() {
    //const { handler } = this;
    return (
      <section className="filter-nav">
        <form>
          <label>
            <input
              type="checkbox"
              // data-is="women"
              // onChange={handler}
              // name="filter"
              checked={this.state.women}
              onChange={event => this.genericOnChange(event)}
              name="women"
            />
            <p className="paragraph">women</p>
          </label>
          <label>
            <input
              type="checkbox"
              // data-is="men"
              // onChange={handler}
              // name="filter"
              checked={this.state.men}
              onChange={event => this.genericOnChange(event)}
              name="men"
            />
            <p className="paragraph"> men</p>
          </label>
          <label>
            <input
              type="checkbox"
              // data-is="other"
              // onChange={handler}
              // name="filter"
              checked={this.state.other}
              onChange={event => this.genericOnChange(event)}
              name="other"
            />
            <p className="paragraph"> other</p>
          </label>
        </form>

        <ArticlesTable selection={this.state.dataFilter} />

        {/* Ici une div/component avec le nombre de boutons générés en fonction de la taille de la selection (donc avec modulo 9) en fonction du bouton cliqué on slice (0,8) ou (9, 17)ou (18,26)....*/}
      </section>
    );
  }
}

export default FilterNav;
