import React, { PropTypes } from 'react';
import cx from 'classnames';

import './styles.scss';


export default class Button extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    inProgress: PropTypes.bool,
  }


  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    };
  }


  getRipple = () => {
    let jsx;

    if (this.state.isPressed) {
      jsx = (
        <div className='ripple-effect' style={{
          height: this.state.height,
          width: this.state.height,
          top: this.state.yPos - (this.state.height / 2),
          left: this.state.xPos - (this.state.height / 2),
        }}
        >
        </div>
      );
    }

    return jsx;
  }


  startRipple = (e) => {
    this.setState({
      xPos: e.pageX - e.currentTarget.parentElement.offsetLeft,
      yPos: e.pageY - e.currentTarget.parentElement.offsetTop,
      height: e.currentTarget.offsetHeight,
      isPressed: true,
    });

    window.setTimeout(() => {
      this.setState({
        isPressed: false,
      });
    }, 1000);
  }

  render() {
    const classes = cx('button', this.props.className, {
      'button_type_in-progress': this.props.inProgress,
    });

    let style = Object.assign({}, this.props.style);

    return (
      <button {...this.props} style={style} className={classes}>
        <div
          className='ripple'
          onMouseDown={this.startRipple}
        >
          {this.getRipple()}
        </div>
        {this.props.children}
      </button>
    );
  }
}
