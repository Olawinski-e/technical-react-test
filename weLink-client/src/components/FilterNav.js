import React, { Component } from "react";
import contactArray from "./../contacts.json";

import ArticlesTable from "./ArticlesTable.js";

import "./FilterNav.css";

class FilterNav extends Component {
  state = {
    selection: contactArray,

    selected: ["women", "men", "other"],
    filters: {
      women: true,
      men: true,
      other: true
    }
  };

  genericOnChange(event) {
    const { name, checked } = event.target;
    var updatedFilter = [];
    this.setState(
      {
        filters: Object.assign({}, this.state.filters, {
          [name]: checked
        })
      },
      () => {
        const { filters } = this.state;
        updatedFilter = Object.keys(filters)
          .filter(function(key) {
            return filters[key];
          })
          .map(String);
        this.setState(
          {
            selected: updatedFilter
          },
          () => {
            const { selected } = this.state;
            const selection = contactArray.filter(oneContact => {
              return selected.includes(oneContact.filter);
            });
            console.log("selection", selection);

            this.setState({
              selection: selection
            });
          }
        );
      }
    );
  }

  render() {
    // const { handler } = this;
    return (
      <section className="filter-nav">
        <form>
          <label>
            <input
              type="checkbox"
              checked={this.state.filters.women}
              onChange={event => this.genericOnChange(event)}
              name="women"
            />
            women
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.filters.men}
              onChange={event => this.genericOnChange(event)}
              name="men"
            />
            men
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.filters.other}
              onChange={event => this.genericOnChange(event)}
              name="other"
            />
            other
          </label>
        </form>

        <ArticlesTable selection={this.state.selection} />

        {/* Ici une div/component avec le nombre de boutons générés en fonction de la taille de la selection (donc  avec modulo 9)
        en fonction du bouton cliqué on slice (0,8) ou (9, 17) ou (18,26)....*/}
      </section>
    );
  }
}

export default FilterNav;
