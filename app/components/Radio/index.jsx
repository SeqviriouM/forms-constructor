import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Radio extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }


  getOptions = () => {
    const options = this.props.options ? this.props.options : [
      { value: 'option1', label: 'Option 1', id: 0 },
      { value: 'option2', label: 'Option 2', id: 1 }
    ];

    return options.map((item) => {
      return (
        <div className='radio__element-wrapper'>
          <input name={item.value} type='radio' className='radio__option'/>
          <label className='radio__label'>
            {item.label}
          </label>
        </div>
      );
    });
  }


  render() {
    const classes = cx('radio', this.props.className);

    return (
      <div className='radio-container'>
        {this.getOptions()}
      </div>
    );
  }
}
