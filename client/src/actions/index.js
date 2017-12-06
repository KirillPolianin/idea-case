import axios from 'axios';

export const FETCH_IDEAS = 'fetch_ideas';
export const SUBMIT_IDEA = 'submit_idea';
export const FETCH_CATEGORIES = 'fetch_categories';

export const fetchCategories = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/categories');

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const fetchIdeas = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/ideas');

  dispatch({ type: FETCH_IDEAS, payload: res.data });
};

export const newIdeaSubmit = (values, history) => async dispatch => {
  const res = await axios.post('http://localhost:5000/api/ideas', values);

  history.push('/');
  dispatch({ type: SUBMIT_IDEA, payload: res.data });
};
