import _ from 'lodash';
import { FETCH_MEMBERS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEMBERS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}
