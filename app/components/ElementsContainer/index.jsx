import React from 'react';
import Element from 'components/Element';
import './styles.scss';

export default class ElementsContainer extends React.Component {
  render() {
    return (
      <div className='elements-container'>
        <Element className='element-container__item' type='input' />
        <Element className='element-container__item' type='select' />
        <Element className='element-container__item' type='datepicker' />
        <Element className='element-container__item' type='label' />
        <Element className='element-container__item' type='checkbox' />
        <Element className='element-container__item' type='radio' />
      </div>
    );
  }
}
