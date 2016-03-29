import React from 'react';
import store from 'store';
import * as actionsForm from 'actions/form';
import Element from 'components/Element';
import './styles.scss';

export default class ElementsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  addControlToForm = (e) => {
    const targetType = e.currentTarget.dataset.type;

    if (store.getState().currentComponentId !== -1) {
      store.dispatch(actionsForm.addControl({
        control: {
          type: targetType,
          config: {
            name: 'name',
            size: '',
            placeholder: '',
          },
        },
        currentId: store.getState().currentComponentId,
      }));
    } else {
      console.log('Choose component where add control');
    }
  }


  render() {
    return (
      <div className='elements-container'>
        <div className='element-container__item'>
          <Element type='input' />
          <div
            className='element-container__add'
            data-type='input'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
        <div className='element-container__item'>
          <Element type='select' />
          <div
            className='element-container__add'
            data-type='select'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
        <div className='element-container__item'>
          <Element type='datepicker' />
          <div
            className='element-container__add'
            data-type='datepicker'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
        <div className='element-container__item'>
          <Element type='label' />
          <div
            className='element-container__add'
            data-type='label'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
        <div className='element-container__item'>
          <Element type='checkbox' />
          <div
            className='element-container__add'
            data-type='checkbox'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
        <div className='element-container__item'>
          <Element type='radio' />
          <div
            className='element-container__add'
            data-type='radio'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
      </div>
    );
  }
}
