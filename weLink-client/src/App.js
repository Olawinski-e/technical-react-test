import React, { Component } from "react";

import Header from "./components/Header.js";
import FilterNav from "./components/FilterNav.js";
import Homepage from "./components/Homepage.js";

import PageNav from "./components/PageNav.js";

import contactArray from "./contacts.json";

import "./App.css";

class App extends Component {
  state = {
    pageStart: 0,
    pageEnd: 9,
    page : contactArray.slice(0,9),
    selection: contactArray,
    selected: ["women", "men", "other"],
    filters: {
      women: true,
      men: true,
      other: true
    }
  };

  // this method is passed to the FilterNav component as a prop so that clicking a link toggles the checkboxes accordingly
  genericOnChange(event) {
    //
    const { name, checked } = event.target;
    var updatedFilter = [];
    this.setState(
      {
        pageStart: 0,
        pageEnd: 9,
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
            console.log("selection", selection.length);

            this.setState({
              selection: selection
            }, () => {
              const { selection } = this.state;
              const page = selection.slice(0,9);
              this.setState({
                page: page
              }) 

            });
          }
        );
      }
    );
  }

  // this method is passed to the Header component as a prop so that clicking a link toggles the checkboxes accordingly
  genericSwitch(event) {
    //
    const { name } = event.target;
    const { filters } = this.state;
    var updatedFilter = [];
    Object.keys(filters).forEach(key => {
      if (filters[key]) filters[key] = false;
    });
    this.setState(
      {
        pageStart: 0,
        pageEnd: 9,
        filters: Object.assign({}, this.state.filters, {
          [name]: true
        })
      },
      () => {
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
            }, () => {
              const { selection } = this.state;
              const page = selection.slice(0,9);
              this.setState({
                page: page
              }) 

            });
          }
        );
      }
    );
  }

  genericSlicer(event, pageStartIndex, pageEndIndex) {
    const { selection } = this.state;
    this.setState({
      pageStart: pageStartIndex,
      pageEnd: pageEndIndex,
      page: selection.slice(pageStartIndex, pageEndIndex)
    }, () => {
      console.log("STATE", this.state);

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
          selection={this.state.page}
        />
        <PageNav
          className="header"
          onPage={(event, pageStartIndex, pageEndIndex) => this.genericSlicer(event, pageStartIndex, pageEndIndex)}
          selection={this.state.selection}
        />
      </section>
    );
  }
}

export default App;
