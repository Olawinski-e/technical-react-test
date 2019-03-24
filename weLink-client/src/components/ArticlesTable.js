import React, { Component } from "react";
import contacts from "./../contacts.json";

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
        <h2 className="page-title">Page Title</h2>

        <div className="GridView container-fluid">
          <div className="row">
            {contactArray.map(oneContact => {
              return (
                <div className="col-4 myCol p-0 image-size">
                  <div className="square">
                    <img
                      src={oneContact.pictureUrl}
                      className={`square-img ${oneContact.style}`}
                      alt="image2"
                    />
                  </div>
                  <h3>{oneContact.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ArticlesTable;
