import _ from 'lodash';
import {
  FETCH_MEMBERS,
  FETCH_MEMBER,
  NEW_MEMBER,
  DELETE_MEMBER
} from '../actions/memberActions';

const defaultState = {
  members: {},
  member: { userName: {}, email: {} }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MEMBERS:
      return {
        ...state,
        members: _.mapKeys(action.payload, 'id')
      };

    case NEW_MEMBER:
      return {
        ...state,
        member: { userName: {}, email: {} }
      };

    case FETCH_MEMBER:
      return {
        ...state,
        member: action.payload
      };

    case DELETE_MEMBER:
      return {
        ...state,
        members: _.omit(state.members, action.payload)
      };

    default:
      return state;
  }
}
