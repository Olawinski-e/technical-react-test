import React, { Component } from "react";

import Header from "./components/Header.js";
import FilterNav from "./components/FilterNav.js";
import contactArray from "./contacts.json";


import "./App.css";

class App extends Component {
  state = {
    selection: contactArray,

    selected: ["women", "men", "other"],
    filters: {
      women: true,
      men: true,
      other: true
    }
  };

  // this method is passed to the FilterNav component as a prop so that clicking a link toggles the checkboxes accordingly
  genericOnChange(event) { // 
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


  // this method is passed to the Header component as a prop so that clicking a link toggles the checkboxes accordingly
  genericSwitch(event) { // 
    const { name } = event.target;
    const { filters } = this.state;
    var updatedFilter = [];
    Object.keys(filters).forEach(key => {
      if (filters[key]) filters[key]=false;
    });
    this.setState(
      {
        filters: Object.assign({}, this.state.filters, {
          [name]: true
        })
      }, () => {
        const { filters } = this.state;
        console.log("filters", filters);

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
            this.setState({
              selection: selection
            });
          }
        );
      })
  }


  render() {
    return (
      <section className="App">
        <Header 
          className="header" 
          onLink={event => this.genericSwitch(event)}

        />

        <FilterNav 
          className="articles-table" 
          onBox={event => this.genericOnChange(event)}
          filters={this.state.filters} 
          selection={this.state.selection}
        />
      </section>
    );
  }
}

export default App;
