import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';
import { form } from './form';
import { currentControlId } from './currentControlId';

export const appReducer = combineReducers({
  router: routerStateReducer,
  form,
  currentControlId,
});
