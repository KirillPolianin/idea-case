import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import MemberField from './MemberField';

class MemberForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { member } = nextProps;
    if (member.id !== this.props.member.id) {
      this.props.initialize(member);
    }
  };

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

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3 style={{ marginTop: '1em' }}>
          {this.props.member.id ? 'Edit Member' : 'Add New Member'}
        </h3>
        <form onSubmit={handleSubmit}>
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
})(MemberForm);
