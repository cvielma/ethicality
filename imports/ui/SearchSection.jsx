import React, { Component, PropTypes } from 'react';

// Search component - represents the Search Section
export default class SearchSection extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log('Form Data:' + JSON.stringify(data));
    console.log('HandleSubmit: ' + this.props.handleSubmit);
    this.props.handleSubmit(data.get("search"));
  }

  render() {
    return (
    <section className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Ethicality</h1>
        <h3 className="mb-5">
            <em>Check before you buy!</em>
          </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <input type="text" name="search" className="form-control form-control-lg" placeholder="Search for..." />
            </div>
            <div className="col-12 col-md-3">
              <span className="input-group-btn">
                <button className="btn btn-block btn-lg btn-primary" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="overlay"></div>
    </section>
    );
  }
}

SearchSection.propTypes = {
  handleSubmit: PropTypes.func
}
