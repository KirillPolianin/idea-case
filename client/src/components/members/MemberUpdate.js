import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { fetchMember, updateMember } from '../../actions';
import MemberField from './MemberField';

class MemberUpdate extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMember(id);
  }

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

  onSubmit = values =>
    this.props.updateMember(
      values,
      this.props.match.params.id,
      this.props.history
    );

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

// function mapStateToProps(state, ownProps) {
//   return {
//     member: state.members[ownProps.match.params.id]
//   };
// }

export default reduxForm({
  form: 'memberUpdateForm'
})(connect(null, { fetchMember, updateMember })(withRouter(MemberUpdate)));
