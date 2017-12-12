import axios from 'axios';
import { ROOT_URL } from './rootUrl';

export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_COMMENT = 'fetch_comment';
export const CREATE_COMMENT = 'create_comment';
export const NEW_COMMENT = 'new_comment';
export const DELETE_COMMENT = 'delete_comment';

export const newComment = () => dispatch => {
  dispatch({ type: NEW_COMMENT });
};

export const fetchComments = ideaId => async dispatch => {
  console.log(ideaId);
  const res = await axios.get(`${ROOT_URL}/comments`, ideaId);

  dispatch({ type: FETCH_COMMENTS, payload: res.data });
};

export const fetchComment = id => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/comments/${id}`);

  dispatch({ type: FETCH_COMMENT, payload: res.data });
};

export const createComment = (comment, history) => async dispatch => {
  const res = await axios.post(`${ROOT_URL}/api/comments`, comment);

  history.push('/comments');
  dispatch({ type: CREATE_COMMENT, payload: res.data });
};

export const deleteComment = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/api/comments/${id}`);

  await dispatch({ type: DELETE_COMMENT, payload: id });
};
