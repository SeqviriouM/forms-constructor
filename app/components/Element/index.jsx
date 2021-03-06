import React, { PropTypes } from 'react';
import store from 'store';
import { connect } from 'react-redux';
import cx from 'classnames';
import * as actionsForm from 'actions/form';
import Input from 'components/Input';
import Select from 'components/Select';
import Datepicker from 'components/Datepicker';
import Label from 'components/Label';
import Checkbox from 'components/Checkbox';
import Radio from 'components/Radio';
import Button from 'components/Button';
import './styles.scss';
import { CONTROLS } from 'constants';

@connect(state => ({
  currentComponentId: state.currentComponentId,
}))
export default class ElementsContainer extends React.Component {

  static propTypes = {
    currentComponentId: PropTypes.number,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    item: PropTypes.object,
  }


  constructor(props) {
    super(props);

    this.state = {
      hoverAnimation: false,
    };
  }

  startHoverAnimation = () => {
    this.setState({
      hoverAnimation: true,
    });
  }


  stopHoverAnimation = () => {
    this.setState({
      hoverAnimation: false,
    });
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
    let renderTemplate;
    const classes = cx('element', this.props.className);

    if (this.props.type === 'input') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Input
            className='element__input'
            name={this.props.item ? this.props.item.formControl.config.name : ''}
            placeholder={this.props.item ? this.props.item.formControl.config.placeholder : ''}
          />
        </div>
      );
    } else if (this.props.type === 'select') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Select
            options={this.props.item ? this.props.item.formControl.config.options : ''}
            name={this.props.item ? this.props.item.formControl.config.name : ''}
          />
        </div>
      );
    } else if (this.props.type === 'datepicker') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Datepicker />
        </div>
      );
    } else if (this.props.type === 'label') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Label className='element__label'>
            Label
          </Label>
        </div>
      );
    } else if (this.props.type === 'checkbox') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Checkbox
            className='element__checkbox'
            options={this.props.item ? this.props.item.formControl.config.options : ''}
            name={this.props.item ? this.props.item.formControl.config.name : ''}
          />
        </div>
      );
    } else if (this.props.type === 'radio') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Radio
            className='element__radio'
            options={this.props.item ? this.props.item.formControl.config.options : ''}
            name={this.props.item ? this.props.item.formControl.config.name : ''}
          />
        </div>
      );
    } else if (this.props.type === 'button') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Button
            className='element__button'
            type='submit'
            style={this.props.item ? this.props.item.formControl.style: ''}
          >{this.props.item ? this.props.item.formControl.config.label : 'Submit'}</Button>
        </div>
      );
    }

    return renderTemplate;
  }
}
