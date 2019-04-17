import React, { Component } from "react";

import Header from "./components/Header.js";
import FilterNav from "./components/FilterNav.js";
import Homepage from "./components/Homepage.js";

import PageNav from "./components/PageNav.js";

import contactArray from "./contacts.json";

import "./App.css";

class App extends Component {
  state = {
    // (10) initially we always want to display the first 9 contacts
    pageStart: 0,
    pageEnd: 9,
    // here we get a subset of the originalArray, again default 
    // to the 9 first on the first render
    page : contactArray.slice(0,9),
    selection: contactArray,
    selected: ["women", "men", "other"],
    filters: {
      women: true,
      men: true,
      other: true
    }
  };

  // this method is passed to the FilterNav component as a prop so that clicking checkboxes 
  // accordingly filters the array and resets the pagination according to the selection
  genericOnChange(event) {
    const { name, checked } = event.target;
    var updatedFilter = [];
    this.setState(
      {
        // (11) whenever we change the selection we will eventually need to reset pagination and go back 
        // to page 1
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
              // what to actually display in a page is a subset of selection which is a subset of 
              // contactArray. Here it is reset to the first page.
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

  // (11b) this method is passed to the Header component as a prop so that clicking a link 
  // toggles the checkboxes accordingly. Not very dry for now, most of the code is the same as 
  // genericOnChange  bove...notably for resetting the pagination and displaying page 1
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
    // (8) based on the checkboxes we may have a filtered version of the 
    // original contactArray that's what this.state.selectoin contains
    const { selection } = this.state;
    // based on the indices passed as the buttons are clicked we update the 
    // app's state
    this.setState({
      pageStart: pageStartIndex,
      pageEnd: pageEndIndex,
      // this is the subset of contacts for the current page we update
      page: selection.slice(pageStartIndex, pageEndIndex)
    }, () => {
      // just checkin'
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
          // we pass the contacts that should be displayed on the current page 
          page={this.state.page}
        />
        <PageNav
          className="header"
          // (7) when a button on the PageNav is clicked genericSlicer receives
          // the indices of the first and last contact of the selection to display
          onPage={(event, pageStartIndex, pageEndIndex) => this.genericSlicer(event, pageStartIndex, pageEndIndex)}
          // we also pass the selection as a prop so that we can calculate there 
          // how many buttons we need and the indices they will pass to the 
          // genericSlicer method.
          selection={this.state.selection}
        />
      </section>
    );
  }
}

export default App;
