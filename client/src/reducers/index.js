import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import hui from './hui';
import membersReducer from './membersReducer';

export default combineReducers({
  members: membersReducer
});
