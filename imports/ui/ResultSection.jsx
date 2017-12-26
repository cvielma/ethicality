import React, { Component } from 'react';

// Search component - represents the Search Section
export default class ResultSection extends Component {
  render() {
    return (
      <div className="container">

        <h1 className="my-4">Company</h1>

        <div className="row">

          <div className="col-md-5">
            <img className="img-fluid" src="http://placehold.it/750x500" alt=""></img>
          </div>

          <div className="col-md-7">
            <h3 className="my-1">Company Summary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <h3 className="my-3">Highlights</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>

        </div>

        <h3 className="my-4">Details</h3>

        <div className="row">
        </div>

        <h3 className="my-4">Related</h3>
        <div className="row">

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img className="img-fluid" src="http://placehold.it/500x300" alt=""></img>
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img className="img-fluid" src="http://placehold.it/500x300" alt=""></img>
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img className="img-fluid" src="http://placehold.it/500x300" alt=""></img>
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img className="img-fluid" src="http://placehold.it/500x300" alt=""></img>
            </a>
          </div>

        </div>
      </div>
    );
  }
}
