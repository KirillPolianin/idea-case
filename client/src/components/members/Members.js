import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchMembers, deleteMember } from '../../actions/memberActions';

class Members extends Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  renderMembers() {
    return _.map(this.props.members, member => {
      return (
        <div className="card blue-grey darken-1" key={member.id}>
          <div className="card-content white-text">
            <span className="card-title">{member.userName}</span>
            <p>{member.email}</p>
          </div>
          <div className="card-action">
            <Link to={`/members/update/${member.id}`}>Edit</Link>
            <button
              className="red darken-3 btn"
              onClick={() => this.props.deleteMember(member.id)}
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
        <h2>Members</h2>
        {this.renderMembers()}
        <div className="fixed-action-btn">
          <Link to="/members/new" className="btn-floating btn-large blue">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.memberStore.members
  };
}

export default connect(mapStateToProps, { fetchMembers, deleteMember })(
  Members
);
