import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';

class Members extends Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    return (
      
    );
  }
}

const mapStateToProps = ({ members }) => ({ membres });

export default connect(mapStateToProps, { fetchMembers })(Members);
