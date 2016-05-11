import { compose, createStore, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { appReducer } from 'reducers/reducer';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import routes from 'routes/routes';
import socketClient from 'core/socket';

const socketMiddleware = () => next => action => {
  if (action.send) {
    socketClient(action.type, action.payload);
  }
  return next(action);
};

const store = compose(
  applyMiddleware(socketMiddleware),
  reduxReactRouter({
    createHistory,
    routes,
  }),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(appReducer);

export default store;
