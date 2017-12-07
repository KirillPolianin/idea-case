import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchCategories, deleteCategory } from '../../actions/categoryActions';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return _.map(this.props.categories, category => {
      return (
        <div className="card blue-grey darken-1" key={category.id}>
          <div className="card-content white-text">
            <span className="card-title">{category.title}</span>
            <p>
              Budget:{' '}
              {!category.budgetLimit ? 'Not specified' : category.budgetLimit}
            </p>
            <p>Active: {category.isActive === 1 ? 'Yes' : 'No'}</p>
          </div>
          <div className="card-action">
            <Link to={`/categories/update/${category.id}`}>Edit</Link>
            <button
              className="red darken-3 btn"
              onClick={() => this.props.deleteCategory(category.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCategories()}
        <div className="fixed-action-btn">
          <Link to="/categories/new" className="btn-floating btn-large blue">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryStore.categories
  };
}

export default connect(mapStateToProps, { fetchCategories, deleteCategory })(
  Categories
);
