import _ from 'lodash';
import { FETCH_MEMBERS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEMBERS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_MEMBER:
      return { ...state, [action.payload.data.id]: payload.data };
    default:
      return state;
  }
}
