import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas } from '../../actions/ideaActions';
import Comments from './Comments';

class Ideas extends Component {
  componentDidMount() {
    this.props.fetchIdeas();
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
            <Link to={`/ideas/update/${idea.id}`}>Edit</Link>
            <button
              className="red darken-3 btn"
              onClick={() => this.props.deleteIdea(idea.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ ideas: state.ideaStore.ideas });

export default connect(mapStateToProps, { fetchIdeas })(Ideas);
