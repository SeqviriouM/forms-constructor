import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from 'store';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
