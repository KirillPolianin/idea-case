import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createMember,
  newMember,
  updateMember,
  fetchMember
} from '../../actions/memberActions';
import MemberForm from './MemberForm';

class MemberFormPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchMember(id);
    } else {
      this.props.newMember();
    }
  }

  componentWillUnmount() {
    this.props.newMember();
  }

  submit = member => {
    if (!member.id) {
      return this.props.createMember(member, this.props.history);
    } else {
      return this.props.updateMember(member, this.props.history);
    }
  };

  render() {
    return (
      <div>
        <MemberForm member={this.props.member} onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.memberStore.member
  };
}

export default connect(mapStateToProps, {
  newMember,
  createMember,
  fetchMember,
  updateMember
})(withRouter(MemberFormPage));
