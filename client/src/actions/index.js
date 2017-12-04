import axios from 'axios';

export const FETCH_MEMBERS = 'fetch_members';

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members');

  dispatch({ type: FETCH_MEMBERS, payload: res.data });
};

export const fetchIdeas = () => async dispatch => {
  const res = await axios.get('/api/ideas');

  dispatch({ type: FETCH_IDEAS, payload: res.data });
};
