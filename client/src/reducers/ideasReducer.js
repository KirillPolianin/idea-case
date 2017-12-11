import _ from 'lodash'
import {
  FETCH_IDEAS,
  FETCH_IDEA,
  NEW_IDEA,
  DELETE_IDEA
} from '../actions/ideaActions'

const defaultState = {
  ideas: {},
  idea: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_IDEAS:
      return {
        ...state,
        ideas: _.mapKeys(action.payload, 'id')
      }

    case NEW_IDEA:
      return {
        ...state,
        idea: { userName: {}, email: {} }
      }

    case FETCH_IDEA:
      return {
        ...state,
        idea: action.payload
      }

    case DELETE_IDEA:
      return {
        ...state,
        ideas: _.omit(state.ideas, action.payload)
      }

    default:
      return state
  }
}
