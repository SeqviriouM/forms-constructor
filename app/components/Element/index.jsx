import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Input from 'components/Input';
import Select from 'components/Select';
import Datepicker from 'components/Datepicker';
import Label from 'components/Label';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';
import './styles.scss';

export default class ElementsContainer extends React.Component {
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

  render() {
    let renderTemplate;

    if (this.props.type === 'input') {
      renderTemplate = (
        <div
          className='element'
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
          className='element'
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
          className='element'
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
          className='element'
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
          className='element'
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
          className='element'
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
