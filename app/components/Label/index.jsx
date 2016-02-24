import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Label extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const classes = cx('label', this.props.className);

    return (
      <label className={classes}>
        {this.props.children}
      </label>
    );
  }
}