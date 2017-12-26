import React, {Component} from 'react';

// Menu component - represents the Menu
export default class Menu extends Component {
  render() {
    return (
      <div>
        <a className="menu-toggle rounded" href="#">
          <i className="fa fa-bars"></i>
        </a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#page-top">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
