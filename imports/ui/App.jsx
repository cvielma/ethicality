import React, {Component, PropTypes} from 'react';
import Menu from './Menu.jsx';
import SearchSection from './SearchSection.jsx';
import ResultSection from './ResultSection.jsx';
import NoResultSection from './NoResultSection.jsx';

const SECTION = {
  "SEARCH": 0,
  "FOUND": 1,
  "NOT_FOUND": 2
};

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super();
    this.state = {currentSection: SECTION.SEARCH};
    this.searchResult = this.searchResult.bind(this);
  };

  isCurrentSection(section) {
    return section === this.state.currentSection;
  };

  goToSection(section) {
    this.setState({currentSection: section});
  }

  menuItems() {
    return [
      {
        name: "Home",
        callback: () => this.goToSection(0) //TODO: fix this to use the const
      }
    ];
  }

  searchResult(content) {
    if (content) {
      //Set found variable
      this.goToSection(SECTION.FOUND);
    } else {
      this.goToSection(SECTION.NOT_FOUND);
    }
  }

  render() {
    return (
      <div>
        <Menu title="Ethicality" items={this.menuItems()}/>
        {this.isCurrentSection(SECTION.SEARCH)
          ? (<SearchSection callback={this.searchResult} />)
          : ''}
        {this.isCurrentSection(SECTION.FOUND)
          ? (<ResultSection/>)
          : ''}
        {this.isCurrentSection(SECTION.NOT_FOUND)
          ? (<NoResultSection/>)
          : ''}
      </div>
    );
  }
};
