import React, { PropTypes } from 'react';
import Element from 'components/Element';
import './styles.scss';

export default class ElementsContainer extends React.Component {
  render() {
    return (
      <div className='elements-container'>
        <Element type='input' />
        <Element type='select' />
        <Element type='datepicker' />
        <Element type='label' />
        <Element type='checkbox' />
        <Element type='radio' />
      </div>
    );
  }
}
