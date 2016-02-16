import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          Hello world Yo
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
