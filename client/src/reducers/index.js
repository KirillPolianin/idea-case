import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ideasReducer from './ideasReducer';
import membersReducer from './membersReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  members: membersReducer,
  ideas: ideasReducer,
  categories: categoriesReducer,
  form: reduxForm
});
