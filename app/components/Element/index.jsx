import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
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
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Input className='element__input' />
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='input'
              onClick={this.addControlToForm}
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
            }
          </Motion>
        </div>
      );
    } else if (this.props.type === 'select') {
      renderTemplate = (
        <div
          className={classes}
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Select/>
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='select'
              onClick={this.addControlToForm}
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
              }
          </Motion>
        </div>
      );
    } else if (this.props.type === 'datepicker') {
      renderTemplate = (
        <div
          className={classes}
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Datepicker />
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='datepicker'
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
              }
          </Motion>
        </div>
      );
    } else if (this.props.type === 'label') {
      renderTemplate = (
        <div
          className={classes}
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Label className='element__label'>
            Label
          </Label>
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='label'
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
              }
          </Motion>
        </div>
      );
    } else if (this.props.type === 'checkbox') {
      renderTemplate = (
        <div
          className={classes}
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Checkbox className='element__checkbox' />
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='checkbox'
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
              }
          </Motion>
        </div>
      );
    } else if (this.props.type === 'radio') {
      renderTemplate = (
        <div
          className={classes}
          onMouseOver={this.startHoverAnimation}
          onMouseOut={this.stopHoverAnimation}
        >
          <Radio className='element__radio' />
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.hoverAnimation ? 0 : 300, [140, 12]) }}
          >
            {interpolated => <div
              className='element__add'
              data-type='radio'
              style={{ transform: `translateX(${interpolated.x}px)` }}
            >
              <span>+</span>
            </div>
              }
          </Motion>
        </div>
      );
    }

    return renderTemplate;
  }
}
