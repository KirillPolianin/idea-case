import axios from 'axios';

export const FETCH_MEMBERS = 'fetch_members';

export const fetchMembers = () => async dispatch => {
  const res = axios.get('/api/members');

  dispatch({ type: FETCH_MEMBERS, payload: res.data });
};
