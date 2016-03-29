import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';
import { form } from './form';
import { currentComponentId } from './currentComponentId';

export const appReducer = combineReducers({
  router: routerStateReducer,
  form,
  currentComponentId,
});
