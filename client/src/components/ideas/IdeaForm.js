import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import FormField from '../utils/FormField';

class IdeaForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { idea } = nextProps;
    if (idea.id !== this.props.idea.id) {
      this.props.initialize(idea);
    }
  };

  renderFields() {
    const FIELDS = [
      { label: 'Title', name: 'title', type: 'text' },
      { label: 'Description', name: 'description', type: 'text' },
      { label: 'Budget', name: 'budget', type: 'text' },
      { label: 'People needed', name: 'peopleNeeded', type: 'text' },
      { label: 'Enable comments?', name: 'isReadyForComments', type: 'radio' },
      {
        label: 'Categories',
        name: 'categories',
        type: 'options',
        data: this.props.categories
      }
    ];

    return (
      <div>
        <Field
          key="userName"
          component={FormField}
          type="text"
          label="Username"
          name="userName"
        />
        <Field
          key="email"
          component={FormField}
          type="email"
          label="Email"
          name="email"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3 style={{ marginTop: '1em' }}>
          {this.props.idea.id ? 'Edit Idea' : 'Add New Idea'}
        </h3>
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          <Link to="/" className="red btn-flat white-text">
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

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.userName) {
    errors.userName = 'This line is required!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'ideaForm'
})(IdeaForm);
