import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import MemberField from './MemberField';
import { createMember } from '../../../actions'

class MemberForm extends Component {
  renderFields() {
    return (
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
    )
  }

  render() {
    const { formValues, history } = this.props;

    return (
      <div>
        <form onSubmit={this.props.handleSumbit(() => createMember(formValues, history))}>
          {this.renderFields()}
          <Link to="/members" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            type="submit"
            className="teal btn-flat right white-text"
          >
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
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.userName) {
      errors.userName = 'This line is required!';
  }

  return errors;
}

function mapStateToProps(state) {
  return { formValues: state.form.memberForm.values };
}

export default reduxForm({
  validate,
  form: 'memberForm'
})(connect(mapStateToProps, { createMember })(withRouter(MemberForm)));
