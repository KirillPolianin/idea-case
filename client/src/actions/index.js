import axios from 'axios';

export const FETCH_MEMBERS = 'fetch_members';
export const CREATE_MEMBER = 'create_member';

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members');

  dispatch({ type: FETCH_MEMBERS, payload: res.data });
};

export const createMember = (values, history) => async dispatch => {
  const res = await axios.post('/api/members', values);

  history.push('/members');
  dispatch({ type: CREATE_MEMBER, payload: res.data });
};

export const fetchIdeas = () => async dispatch => {
  const res = await axios.get('/api/ideas');

  dispatch({ type: FETCH_IDEAS, payload: res.data });
};
