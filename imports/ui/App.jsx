import React, {Component, PropTypes} from 'react';
import Menu from './Menu.jsx';
import SearchSection from './SearchSection.jsx';
import ResultSection from './ResultSection.jsx';
import NoResultSection from './NoResultSection.jsx';
import { Meteor } from 'meteor/meteor';

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
    this.search = this.search.bind(this);
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

  search(content) {
    Meteor.call('profiles.searchByName', content, (error, result) => {
      console.log('Result: ' + result);
      if (result) {
        //Set found variable
        this.setState({profile: result}); //TODO: assuming result is profile
        this.goToSection(SECTION.FOUND);
      } else {
        this.goToSection(SECTION.NOT_FOUND);
      }
    });
  }

  render() {
    return (
      <div>
        <Menu title="Ethicality" items={this.menuItems()}/>
        {this.isCurrentSection(SECTION.SEARCH)
          ? (<SearchSection handleSubmit={this.search} />)
          : ''}
        {this.isCurrentSection(SECTION.FOUND)
          ? (<ResultSection profile={this.state.profile}/>)
          : ''}
        {this.isCurrentSection(SECTION.NOT_FOUND)
          ? (<NoResultSection/>)
          : ''}
      </div>
    );
  }
};
