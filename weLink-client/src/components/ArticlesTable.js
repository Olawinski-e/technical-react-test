import React, { Component } from "react";

import "./ArticlesTable.css";

class ArticlesTable extends Component {


  render() {
    const contactArray = this.props.page;

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
