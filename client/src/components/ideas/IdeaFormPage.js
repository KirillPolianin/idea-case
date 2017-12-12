import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createIdea,
  newIdea,
  updateIdea,
  fetchIdeaUpdate
} from '../../actions/ideaActions';
import { fetchCategories } from '../../actions/categoryActions';
import IdeaForm from './IdeaForm';

class IdeaFormPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchIdeaUpdate(id);
    } else {
      this.props.newIdea();
    }

    this.props.fetchCategories();
  }

  componentWillUnmount() {
    this.props.newIdea();
  }

  submit = idea => {
    if (!idea.id) {
      return this.props.createIdea(idea, this.props.history);
    } else {
      return this.props.updateIdea(idea, this.props.history);
    }
  };

  render() {
    return (
      <div>
        <IdeaForm
          idea={this.props.idea}
          categories={this.props.categories}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idea: state.ideaStore.idea,
  categories: state.categoryStore.categories
});

export default connect(mapStateToProps, {
  createIdea,
  newIdea,
  updateIdea,
  fetchIdeaUpdate,
  fetchCategories
})(withRouter(IdeaFormPage));
