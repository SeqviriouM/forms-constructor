import React, { PropTypes } from 'react';
import store from 'store';
import cx from 'classnames';
import * as actionsForm from 'actions/form';
import Input from 'components/Input';
import Select from 'components/Select';
import Datepicker from 'components/Datepicker';
import Label from 'components/Label';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';
import './styles.scss';

export default class ElementsContainer extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
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
    const targetType = e.currentTarget.dataset.type;

    if (store.getState().currentControlId !== -1) {
      store.dispatch(actionsForm.addControl({
        control: {
          name: 'name',
          title: '',
          size: '',
          placeholder: '',
          type: targetType,
        },
        currentId: store.getState().currentControlId,
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
          <Input className='element__input' />
        </div>
      );
    } else if (this.props.type === 'select') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Select/>
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
          <Checkbox className='element__checkbox' />
        </div>
      );
    } else if (this.props.type === 'radio') {
      renderTemplate = (
        <div
          className={classes}
        >
          <Radio className='element__radio' />
        </div>
      );
    }

    return renderTemplate;
  }
}
