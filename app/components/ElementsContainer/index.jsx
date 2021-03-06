import React, { PropTypes } from 'react';
import store from 'store';
import { connect } from 'react-redux';
import * as actionsForm from 'actions/form';
import Element from 'components/Element';
import { CONTROLS } from 'constants';
import './styles.scss';

@connect(state => ({
  currentComponentId: state.currentComponentId,
}))
export default class ElementsContainer extends React.Component {

  static propTypes = {
    currentComponentId: PropTypes.number,
  }


  constructor(props) {
    super(props);
  }

  addControlToForm = (e) => {
    const targetType = e.currentTarget.dataset.type.toUpperCase();

    if (this.props.currentComponentId !== -1) {
      store.dispatch(actionsForm.addControl({
        control: CONTROLS[targetType],
        currentId: this.props.currentComponentId,
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
        <div className='element-container__item'>
          <Element type='button' />
          <div
            className='element-container__add'
            data-type='button'
            onClick={this.addControlToForm}
          >
            <span> + </span>
          </div>
        </div>
      </div>
    );
  }
}
