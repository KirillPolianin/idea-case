import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Main';
import NewIdea from './ideas/NewIdea';
import ShowIdea from './ideas/ShowIdea';
import Members from './members/Members';
import NewMember from './members/newMember/MemberForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Main} />
          <Route exact path="/ideas/new" component={NewIdea} />
          <Route exact path="/ideas/:id" component={ShowIdea} />
          <Route exact path="/members" components={Members} />
          <Route exact path="/members/new" components={NewMember} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
