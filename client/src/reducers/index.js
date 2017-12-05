import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import ideasReducer from './ideasReducer'
import membersReducer from './membersReducer'

export default combineReducers({
  members: membersReducer,
  ideas: ideasReducer,
  form: reduxForm
})
