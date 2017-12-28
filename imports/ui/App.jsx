import React, {Component} from 'react';
import Menu from './Menu.jsx';
import SearchSection from './SearchSection.jsx';
import ResultSection from './ResultSection.jsx';
import NoResultSection from './NoResultSection.jsx';
import {Meteor} from 'meteor/meteor';

const SECTION = {
  "SEARCH": 0,
  "FOUND": 1,
  "NOT_FOUND": 2
};

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSection: SECTION.SEARCH
    };
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
    this.setConnectionStatus(); //TODO: handle status nicer
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

  setConnectionStatus() {
    const currentStatus = Meteor.status().connected;
    if (currentStatus != this.state.online) {
      this.setState({online: currentStatus});
    }
  }

  renderSection() {
    if (this.isCurrentSection(SECTION.SEARCH)) {
      return (<SearchSection handleSubmit={this.search}/>);
    } else if (this.isCurrentSection(SECTION.FOUND)) {
      return (<ResultSection profile={this.state.profile}/>);
    } else if (this.isCurrentSection(SECTION.NOT_FOUND)) {
      return (<NoResultSection/>);
    } else {
      return (
        <h3>
          Error, no Section found
        </h3>
      );
    }
  }

  render() {
    return (
      <div>
        <Menu title="Ethicality" items={this.menuItems()}/> {this.renderSection()}
        {this.state.online
          ? ''
          : <h3>Offline</h3>}
      </div>
    );
  }
};
