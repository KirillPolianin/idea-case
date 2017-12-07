import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ideasReducer from './ideasReducer';
import membersReducer from './membersReducer';
import categoriesReducer from './categoriesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  memberStore: membersReducer,
  ideaStore: ideasReducer,
  categoryStore: categoriesReducer,
  comments: commentsReducer,
  form: reduxForm
});
