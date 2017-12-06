import axios from 'axios';

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
  const res = await axios.get(`http://localhost:5000/api/ideas/${id}`);

  dispatch({ type: FETCH_IDEA, payload: res.data });
};

export const createIdea = (idea, history) => async dispatch => {
  const res = await axios.post('http://localhost:5000/api/ideas', {
    ...idea,
    creationDate: new Date(),
    lastModified: new Date()
  });

  history.push('/ideas');
  dispatch({ type: CREATE_IDEA, payload: res.data });
};

export const updateIdea = (idea, history) => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/ideas/${idea.id}`,
    idea
  );

  history.push('/ideas');
  dispatch({ type: UPDATE_IDEA, payload: res.data });
};

export const deleteIdea = id => async dispatch => {
  await axios.delete(`http://localhost:5000/api/ideas/${id}`);

  await dispatch({ type: DELETE_IDEA, payload: id });
};
