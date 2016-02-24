import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Radio extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const classes = cx('radio', this.props.className);

    return (
      <div className='radio-container'>
        <div className='radio__element-wrapper'>
          <input name='radio' type='radio' {...this.props} className={classes} />
          <label>
            Option 1
          </label>
        </div>
        <div className='radio__element-wrapper'>
          <input name='radio' type='radio' {...this.props} className={classes} />
          <label>
            Option 2
          </label>
        </div>
      </div>
    );
  }
}