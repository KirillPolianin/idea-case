import React, { Component } from 'react';
import { connect } from 'rect-redux'
import { fetchIdeas } from '../../actions/index'

class Ideas extends Component {
  componentDidMount() {
    this.props.fetchIdeas()
  }

  renderList = () =>
    _.map(this.props.ideas, idea => {

    }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

}

const mapStateToProps = ({ ideas }) => ({ ideas })
export default connect(mapStateToProps, { fetchIdeas })(Ideas)
