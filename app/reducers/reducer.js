import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';

export const appReducer = combineReducers({
  router: routerStateReducer,
});
