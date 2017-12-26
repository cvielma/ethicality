import React, { Component } from 'react';
import Menu from './Menu.jsx';
import SearchSection from './SearchSection.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <SearchSection />
      </div>
    );
  }
}
