import React, { Component } from "react";

import "./ArticlesTable.css";

class ArticlesTable extends Component {
  render() {
    const contactArray = this.props.selection;

    return (
      <section className="articles-table-page">
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
                  <h3 className="title-card">{oneContact.name}</h3>
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
