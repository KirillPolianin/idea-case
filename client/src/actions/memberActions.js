import axios from 'axios';
import { ROOT_URL } from './rootUrl';

export const FETCH_MEMBERS = 'fetch_members';
export const FETCH_MEMBER = 'fetch_member';
export const CREATE_MEMBER = 'create_member';
export const UPDATE_MEMBER = 'update_member';
export const NEW_MEMBER = 'new_member';
export const DELETE_MEMBER = 'delete_member';

export const newMember = () => dispatch => {
  dispatch({ type: NEW_MEMBER });
};

export const fetchMembers = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/members`);

  dispatch({ type: FETCH_MEMBERS, payload: res.data });
};

export const fetchMember = id => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/members/${id}`);

  dispatch({ type: FETCH_MEMBER, payload: res.data });
};

export const createMember = (member, history) => async dispatch => {
  console.log(member);
  const res = await axios.post(`${ROOT_URL}/api/members`, member);

  history.push('/members');
  dispatch({ type: CREATE_MEMBER, payload: res.data });
};

export const updateMember = (member, history) => async dispatch => {
  const res = await axios.put(`${ROOT_URL}/api/members/${member.id}`, member);

  history.push('/members');
  dispatch({ type: UPDATE_MEMBER, payload: res.data });
};

export const deleteMember = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/api/members/${id}`);

  await dispatch({ type: DELETE_MEMBER, payload: id });
};
