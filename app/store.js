import { compose, createStore } from 'redux';
import { persistState } from 'redux-devtools';
import { appReducer } from 'reducers/reducer';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

const store = compose(
  reduxReactRouter({ createHistory }),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(appReducer);

export default store;
