import _ from 'lodash';
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  NEW_CATEGORY,
  DELETE_CATEGORY
} from '../actions/categoryActions';

const defaultState = {
  categories: {},
  category: { title: {}, budgetLimit: {}, isActive: {} }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: _.mapKeys(action.payload, 'id')
      };

    case NEW_CATEGORY:
      return {
        ...state,
        category: { title: {}, budgetLimit: {}, isActive: {} }
      };

    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: _.omit(state.categories, action.payload)
      };

    default:
      return state;
  }
}
