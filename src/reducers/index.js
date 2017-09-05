import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import form from './form'

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
