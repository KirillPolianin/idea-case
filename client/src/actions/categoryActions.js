import axios from 'axios';

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_CATEGORY = 'fetch_category';
export const CREATE_CATEGORY = 'create_category';
export const UPDATE_CATEGORY = 'update_category';
export const NEW_CATEGORY = 'new_category';
export const DELETE_CATEGORY = 'delete_category';

export const newCategory = () => dispatch => {
  dispatch({ type: NEW_CATEGORY });
};

export const fetchCategories = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/categories');

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const fetchCategory = id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/categories/${id}`);

  dispatch({ type: FETCH_CATEGORY, payload: res.data });
};

export const createCategory = (category, history) => async dispatch => {
  const res = await axios.post(
    'http://localhost:5000/api/categories',
    category
  );

  history.push('/categories');
  dispatch({ type: CREATE_CATEGORY, payload: res.data });
};

export const updateCategory = (category, history) => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/categories/${category.id}`,
    category
  );

  history.push('/categories');
  dispatch({ type: UPDATE_CATEGORY, payload: res.data });
};

export const deleteCategory = id => async dispatch => {
  await axios.delete(`http://localhost:5000/api/categories/${id}`);

  await dispatch({ type: DELETE_CATEGORY, payload: id });
};
