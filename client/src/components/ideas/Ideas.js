import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdeas } from '../../actions/index'
import Comments from './Comments'

class Ideas extends Component {
  componentDidMount() {
    this.props.fetchIdeas()
  }

  renderList = () =>
    _.map(this.props.ideas, idea => {
      return (
        <div className="card" key={idea.id}>
          <div className="card-content">
            <span className="card-title">{idea.title}</span>
            <p>{idea.description}</p>
            <p className="right">
              Sent On: {new Date(idea.creationDate).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Created by: User</a>
            <a>
              <Comments />
            </a>
          </div>
        </div>
      )
    })

  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = ({ ideas }) => ({ ideas })
export default connect(mapStateToProps, { fetchIdeas })(Ideas)
