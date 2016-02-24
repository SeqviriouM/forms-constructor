import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Checkbox extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const classes = cx('checkbox', this.props.className);

    return (
      <div className='checkbox-container'>
        <div className='checkbox__element-wrapper'>
          <input name='checkbox' type='checkbox' {...this.props} className={classes} />
          <label>
            Option 1
          </label>
        </div>
        <div className='checkbox__element-wrapper'>
          <input name='checkbox' type='checkbox' {...this.props} className={classes} />
          <label>
            Option 2
          </label>
        </div>
      </div>
    );
  }
}