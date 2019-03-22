import React, { Component } from "react";

import Header from "./components/Header.js";
import ArticlesTable from "./components/ArticlesTable.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header className="header" />

        <ArticlesTable className="articles-table" />
      </section>
    );
  }
}

export default App;
