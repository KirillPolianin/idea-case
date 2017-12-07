import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createCategory,
  newCategory,
  updateCategory,
  fetchCategory
} from '../../actions/categoryActions';
import CategoryForm from './CategoryForm';

class CategoryFormPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchCategory(id);
    } else {
      this.props.newCategory();
    }
  }

  componentWillUnmount() {
    this.props.newCategory();
  }

  submit = category => {
    if (!category.id) {
      return this.props.createCategory(category, this.props.history);
    } else {
      return this.props.updateCategory(category, this.props.history);
    }
  };

  render() {
    return (
      <div>
        <CategoryForm category={this.props.category} onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.categoryStore.category
  };
}

export default connect(mapStateToProps, {
  newCategory,
  createCategory,
  fetchCategory,
  updateCategory
})(withRouter(CategoryFormPage));
