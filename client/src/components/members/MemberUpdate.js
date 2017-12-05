import React, { Component } from 'react';

class MemberUpdate extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMember(id);
  }

  render() {
    return <div />;
  }
}

export default MemberUpdate;
