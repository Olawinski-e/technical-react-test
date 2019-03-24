import React, { Component } from "react";
// import contacts from "./../contacts.json";

import "./ArticlesTable.css";

class ArticlesTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contactArray: this.props.selection
  //   };
  // }

  render() {
    // const { contactArray } = this.state;
    // console.log(this.state);
    return (
      <section className="articles-table-page">
        <div className="page-title-and-filters">
          <h3 className="page-title">Page Title</h3>
        </div>
        <div className="table">
          {this.props.selection.map(oneContact => {
            return (
              <div className="div-image">
                <img
                  src={oneContact.pictureUrl}
                  className="image"
                  alt="image2"
                />
                <h3>{oneContact.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ArticlesTable;
