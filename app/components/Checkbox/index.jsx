import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class Checkbox extends React.Component {

  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
  }


  getOptions = () => {
    const options = this.props.options ? this.props.options : [
      { value: 'option1', label: 'Option 1', id: 0 },
      { value: 'option2', label: 'Option 2', id: 1 }
    ];

    return options.map((item) => {
      return (
        <div className='checkbox__element-wrapper'>
          <input
            name={this.props.name ? this.props.name : 'checkbox'}
            value={item.value}
            type='checkbox'
            className='checkbox__option'
          />
          <label className='checkbox__label'>
            {item.label}
          </label>
        </div>
      );
    });
  }


  render() {
    const classes = cx('checkbox', this.props.className);

    return (
      <div className='checkbox-container'>
        {this.getOptions()}
      </div>
    );
  }
}
