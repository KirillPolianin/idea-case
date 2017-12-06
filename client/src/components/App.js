import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';
import IdeaFormPage from './ideas/IdeaFormPage';
import ShowIdea from './ideas/ShowIdea';
import Members from './members/Members';
import MemberFormPage from './members/MemberFormPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/ideas/new" component={IdeaFormPage} />
            <Route exact path="/ideas/:id" component={ShowIdea} />
            <Route exact path="/ideas/update/:id" component={IdeaFormPage} />
            <Route exact path="/members/new" component={MemberFormPage} />
            <Route exact path="/members" component={Members} />
            <Route
              exact
              path="/members/update/:id"
              component={MemberFormPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
