import _ from 'lodash';
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
      { label: 'Budget', name: 'budget', type: 'number' },
      { label: 'People needed', name: 'peopleNeeded', type: 'number' },
      { label: 'Enable comments?', name: 'isReadyForComments', type: 'radio' },
      {
        label: 'Categories',
        name: 'categoryId',
        type: 'options',
        data: this.props.categories
      }
    ];

    const options = data =>
      _.map(data, ({ id, title }) => <option value={id}>{title}</option>);

    return _.map(FIELDS, ({ label, name, type, data }) => {
      switch (type) {
        case 'text':
        case 'number':
        case 'email':
          return (
            <Field
              key={name}
              component={FormField}
              type={type}
              label={label}
              name={name}
            />
          );
        case 'radio':
          return (
            <div>
              <label>{label}</label>
              <div>
                <p>
                  <label>
                    <Field
                      name={name}
                      component="input"
                      type="radio"
                      value="1"
                    />
                    Yes
                  </label>
                </p>
                <p>
                  <label>
                    <Field
                      name={name}
                      component="input"
                      type="radio"
                      value="0"
                    />
                    No
                  </label>
                </p>
              </div>
            </div>
          );
        case 'options':
          return (
            <div>
              <label>{label}</label>
              <div>
                <Field name={name} component="select">
                  <option />
                  {options(data)}
                </Field>
              </div>
            </div>
          );
      }
    });
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
