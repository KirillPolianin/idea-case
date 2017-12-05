import _ from 'lodash';
import { FETCH_MEMBERS, FETCH_MEMBER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MEMBERS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_MEMBER:
      return state;
    //{ ...state, [action.payload.data[0].id]: action.payload.data[0] };
    default:
      return state;
  }
}
