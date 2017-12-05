import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';
import NewIdea from './ideas/NewIdea';
import ShowIdea from './ideas/ShowIdea';
import Members from './members/Members';
import NewMember from './members/MemberForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/ideas/new" component={NewIdea} />
            <Route exact path="/ideas/:id" component={ShowIdea} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/members/new" component={NewMember} />
            <Route exact path="/members/update/:id" component={NewMember} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
