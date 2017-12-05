import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import MemberField from './MemberField';
import { createMember } from '../../actions';

class MemberForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          key="userName"
          component={MemberField}
          type="text"
          label="Username"
          name="userName"
        />
        <Field
          key="email"
          component={MemberField}
          type="email"
          label="Email"
          name="email"
        />
      </div>
    );
  }

  onSubmit = values => this.props.createMember(values, this.props.history);

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFields()}
          <Link to="/members" className="red btn-flat white-text">
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
  form: 'memberForm'
})(connect(null, { createMember })(withRouter(MemberForm)));
