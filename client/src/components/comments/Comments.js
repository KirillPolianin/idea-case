import React from 'react';
import _ from 'lodash';
import CommentForm from './CommentForm';

const Comments = ({ comments }) => {
  const renderComments = () => {
    if (comments.length) {
      const list = _.map(comments, (comment, index) => (
        <li className="collection-item" key={index}>
          <div className="right">
            {new Date(comment.commentTimeStamp).toLocaleDateString()}
          </div>
          <div style={{ fontWeight: 'bold' }}>{comment.userName}</div>
          <div>{comment.commentLine}</div>
        </li>
      ));
      return <ul className="collection">{list}</ul>;
    } else {
      return <p>No comments</p>;
    }
  };

  return (
    <div>
      <CommentForm />
      {renderComments()}
    </div>
  );
};

export default Comments;
