import axios from 'axios';
import _ from 'lodash';

export const FETCH_IDEAS = 'fetch_ideas';
export const FETCH_IDEA = 'fetch_idea';
export const CREATE_IDEA = 'create_idea';
export const UPDATE_IDEA = 'update_idea';
export const NEW_IDEA = 'new_idea';
export const DELETE_IDEA = 'delete_idea';

export const newIdea = () => dispatch => {
  dispatch({ type: NEW_IDEA });
};

export const fetchIdeas = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/ideas');

  dispatch({ type: FETCH_IDEAS, payload: res.data });
};

export const fetchIdea = id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/ideas/${id}`);

  dispatch({ type: FETCH_IDEA, payload: res.data });
};

// export const fetchIdeaUpdate = id => async dispatch => {
//   const res = await axios.get(`http://localhost:5000/api/ideas/${id}`);
//
//   const payload = _.omit(res.data, 'lastModified');
//
//   dispatch({ type: FETCH_IDEA, payload });
// };

export const createIdea = (values, history) => async dispatch => {
  const today = new Date();
  const creationDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const idea = {
    ...values,
    creationDate: creationDate
  };
  const res = await axios.post('http://localhost:5000/api/ideas', idea);

  history.push('/');
  dispatch({ type: CREATE_IDEA, payload: res.data });
};

export const updateIdea = (data, history) => async dispatch => {
  const idea = _.omit(data, ['lastModified', 'comments']);

  const res = await axios.put(
    `http://localhost:5000/api/ideas/${idea.id}`,
    idea
  );

  history.push('/');
  dispatch({ type: UPDATE_IDEA, payload: res.data });
};

export const deleteIdea = (id, history) => async dispatch => {
  await axios.delete(`http://localhost:5000/api/ideas/${id}`);

  if (history) {
    history.push('/');
  }

  await dispatch({ type: DELETE_IDEA, payload: id });
};
