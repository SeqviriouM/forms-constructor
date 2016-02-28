import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Label extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    labelOnDoubleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  render() {
    const classes = cx('label', this.props.className);

    return (
      <div className={classes} onDoubleClick={this.props.labelOnDoubleClick}>
        {this.props.children}
      </div>
    );
  }
}
