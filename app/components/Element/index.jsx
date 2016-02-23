import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Input from 'components/Input';
import Select from 'components/Select';
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
    } else {
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
    }

    return renderTemplate;
  }
}
