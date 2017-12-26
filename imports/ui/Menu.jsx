import React, {Component, PropTypes} from 'react';

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
              <a className="js-scroll-trigger" href="#page-top">{this.props.title}</a>
            </li>
            {this.props.items.map(i => {
              return <li className="sidebar-nav-item" key={i.name}>
                <a className="js-scroll-trigger" onClick={i.callback}>{i.name}</a>
              </li>
            })}
          </ul>
        </nav>
      </div>
    )
  }
};

Menu.propTypes = {
  title : PropTypes.string.isRequired,
  items : PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    callback: PropTypes.func
  })).isRequired
};
