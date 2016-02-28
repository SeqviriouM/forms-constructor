import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';
import { form } from './form';

export const appReducer = combineReducers({
  router: routerStateReducer,
  form,
});
