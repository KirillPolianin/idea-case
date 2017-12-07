import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import CategoryField from './CategoryField';

class CategoryForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { category } = nextProps;
    if (category.id !== this.props.category.id) {
      this.props.initialize(category);
    }
  };

  renderFields() {
    return (
      <div>
        <Field
          key="title"
          component={CategoryField}
          type="text"
          label="Title"
          name="title"
        />
        <Field
          key="budgetLimit"
          component={CategoryField}
          type="number"
          label="Budget"
          name="budgetLimit"
        />
        <Field
          key="isActive"
          component={CategoryField}
          name="isActive"
          label="Active"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3 style={{ marginTop: '1em' }}>
          {this.props.category.id ? 'Edit Category' : 'Add New Category'}
        </h3>
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          <Link to="/categories" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (values.budgetLimit && isNaN(values.budgetLimit)) {
    errors.budgetLimit = 'Budget Limit must be a number!';
  }

  if (!values.title) {
    errors.title = 'This line is required!';
  }

  if (!values.isActive) {
    errors.isActive = 'This input is required!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'categoryForm'
})(CategoryForm);
