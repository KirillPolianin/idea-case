import axios from 'axios';

export const FETCH_CATEGORIES = 'fetch_categories';

export const fetchCategories = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/categories');

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};
