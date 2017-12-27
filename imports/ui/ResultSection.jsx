import React, { Component, PropTypes } from 'react';

// ResultSection component -> renders the company's profile
export default class ResultSection extends Component {
  //TODO: improve by extracting parts of the template into variables
  //TODO: export general profile shape
  /** Profile
    {
      name: _,
      img: _,
      summary: _,
      highlights: [highlight1, highlight2],
      details: _,
      related: [
        {
          text: _,
          img: _
        }
      ]
  }
  */

  render() {
    return (
      <div className="container">

        <h1 className="my-4">{this.props.profile.name}</h1>

        <div className="row">

          <div className="col-md-5">
            <img className="img-fluid" src={this.props.profile.img} alt=""></img>
          </div>

          <div className="col-md-7">
            <h3 className="my-1">Company Summary</h3>
            <p>{this.props.profile.summary}</p>
            <h3 className="my-3">Highlights</h3>
            <ul>
              {this.props.profile.highlights.map((highlight, index) => {
                return <li key={index}>{highlight}</li>;
              })}
            </ul>
          </div>

        </div>

        <h3 className="my-4">Details</h3>

        <div className="row">
          <p>{this.props.profile.details}</p>
        </div>

        <h3 className="my-4">Related</h3>
        <div className="row">
          {this.props.profile.related.map((related, index) => {
            return <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <p>{related.text}</p>
              <a href="#">
                <img className="img-fluid" src={related.img} alt=""></img>
              </a>
            </div>
          })}
        </div>
      </div>
    );
  }
}

ResultSection.propTypes = {
  profile: PropTypes.object.isRequired
}
