import React, { Component } from 'react';

// Search component - represents the Search Section
export default class NoResultSection extends Component {
  render() {
    return (
      <div className="container">

        <div className="col-md-12">
          <h1 className="my-4">We don't have a profile for this company/product.</h1>
          <p> You can research a bit on the Internet or go with your guts.
            If you know something about the company, please consider <a>contacting us</a>.</p>
          <h3><a>Go back</a></h3>
        </div>
      </div>
    );
  }
}
