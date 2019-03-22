import React, { Component } from "react";

import "./FilterNav.css";

class ArticlesTable extends Component {
  state = {
    all: [],
    men: [],
    women: []
  };

  handler = evt => {
    // important pour un event handler d'etre en fat arrow => car elle récup la valeur de this de la classe parente
    // console.log(evt);
    const check = evt.target.getAttribute("data-is");
    console.log(check);
  };

  render() {
    const { handler } = this; // syntaxe par destructuration
    return (
      <div className="filter-nav">
        <form>
          <label>
            <input
              type="radio"
              data-is="women"
              onChange={handler}
              name="filter"
            />
            women
          </label>
          <label>
            <input
              type="radio"
              data-is="men"
              onChange={handler}
              name="filter"
            />
            men
          </label>
          <label>
            <input
              type="radio"
              data-is="other"
              onChange={handler}
              name="filter"
            />
            other
          </label>
        </form>
      </div>
    );
  }
}

export default ArticlesTable;
