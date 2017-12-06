import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newIdeaSubmit, fetchCategories } from '../../actions';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import FormField from './FormField';
import ideaFields from './ideaFields';

class NewIdea extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderFields = () => {
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

    const options = data =>
      data.map(({ id, title }) => <option value={id}>{title}</option>);

    return _.map(FIELDS, ({ label, name, type, data }) => {
      switch (type) {
        case 'text':
        case 'email':
          return (
            <Field
              key={name}
              component={FormField}
              type="text"
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
                      value={1}
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
                      value={0}
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
                  {options(data)}
                </Field>
              </div>
            </div>
          );
      }
    });
  };

  onSubmit = values => this.props.newIdeaSubmit(values, this.props.history);

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFields()}
          <Link to="/" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  const validateEmail = () => {};

  _.each(ideaFields, ({ name, type }) => {
    if (!values[name]) {
      errors[name] = 'You need to write something';
    }

    return errors;
  });
};

const mapStateToProps = ({ categories }) => ({ categories });

export default reduxForm({
  validate,
  form: 'ideasForm'
})(
  connect(mapStateToProps, { newIdeaSubmit, fetchCategories })(
    withRouter(NewIdea)
  )
);
