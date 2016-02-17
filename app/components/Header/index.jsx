import React, { PropTypes } from 'react';
import './styles.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <button className="header__humburger">
          {'☰'}
        </button>
      </header>
    );
  }
}
