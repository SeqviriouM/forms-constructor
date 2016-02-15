import React from 'react';
import ReactDOM from 'react-dom';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        Hello world Yo
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
