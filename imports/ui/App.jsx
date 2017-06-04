import React, { Component } from 'react';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container home">
        <header>
          <h1>Todo List</h1>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..."/>
            <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
