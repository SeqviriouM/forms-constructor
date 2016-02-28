import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Form extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
  }

  render() {
    const classes = cx('component', this.props.className);

    return (
      <div className={classes}>
        <div className='component__title'>
          <span>{this.props.item.title}</span>
        </div>
        <div>
          <span className='component__add-control'>Add control</span>
        </div>
      </div>
    );
  }
}
