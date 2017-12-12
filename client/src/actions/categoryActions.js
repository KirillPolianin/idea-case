import axios from 'axios';
import { ROOT_URL } from './rootUrl';

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
  const res = await axios.get(`${ROOT_URL}/api/categories`);

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const fetchCategory = id => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/categories/${id}`);

  dispatch({ type: FETCH_CATEGORY, payload: res.data });
};

export const createCategory = (category, history) => async dispatch => {
  const res = await axios.post(`${ROOT_URL}/api/categories`, category);

  history.push('/categories');
  dispatch({ type: CREATE_CATEGORY, payload: res.data });
};

export const updateCategory = (category, history) => async dispatch => {
  const res = await axios.put(
    `${ROOT_URL}/api/categories/${category.id}`,
    category
  );

  history.push('/categories');
  dispatch({ type: UPDATE_CATEGORY, payload: res.data });
};

export const deleteCategory = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/api/categories/${id}`);

  await dispatch({ type: DELETE_CATEGORY, payload: id });
};
