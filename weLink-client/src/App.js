import React, { Component } from "react";

import Header from "./components/Header.js";
import FilterNav from "./components/FilterNav.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header className="header" />

        <FilterNav className="articles-table" />
      </section>
    );
  }
}

export default App;
