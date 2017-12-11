import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdea, deleteIdea } from '../../actions/ideaActions';
import { fetchComments } from '../../actions/commentActions';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

class ShowIdea extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchIdea(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  renderComments = () => {
    const { idea } = this.props;
    return idea.isReadyForComments ? (
      <Comments comments={idea.comments} />
    ) : (
      <p>Comments are disabled</p>
    );
  };

  render() {
    const { idea } = this.props;

    return (
      <div>
        <div className="card" key={idea.id}>
          <div className="card-content">
            <span className="card-title">{idea.title}</span>
            <p>{idea.description}</p>
            <p className="right">
              Sent On: {new Date(idea.creationDate).toLocaleDateString()}
            </p>
            <br />
            <p className="right">
              Last Modified: {new Date(idea.lastModified).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <button className="btn" onClick={this.props.history.goBack}>
              Back
            </button>
            <a>Created by: User</a>
            <Link to={`/ideas/update/${idea.id}`}>Edit</Link>
            <button
              className="red darken-3 btn"
              onClick={() => this.props.deleteIdea(idea.id)}
            >
              Delete
            </button>
          </div>
        </div>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idea: state.ideaStore.idea
});
export default connect(mapStateToProps, {
  fetchIdea,
  deleteIdea,
  fetchComments
})(ShowIdea);
