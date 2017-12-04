import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';

class Members extends Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    return (
      <div>
    );
  }
}

const mapStateToProps = ({ members }) => ({ members });

export default connect(mapStateToProps, { fetchMembers })(Members);
