import React, { PropTypes } from 'react';
import cx from 'classnames';

import './styles.scss';


export default class SVGButton extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    inProgress: PropTypes.bool,
  }

  render() {
    const classes = cx('svg-button', this.props.className);
    return (
      <div className={classes}>
        <div className='svg-button-wrapper'>
        <svg height='60' width='320'>
          <rect className='svg-button-shape' height='60' width='320' />
        </svg>
        <div className='svg-button-text'>{this.props.children}</div>
      </div>
      </div>
    );
  }
}
