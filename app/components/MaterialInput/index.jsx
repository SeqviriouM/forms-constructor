import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import './styles.scss';


export default class MaterialInput extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    mode: PropTypes.string,
  }


  render() {
    const classes = cx('material-input', {
      'material-input__left-to-right': this.props.mode === 'leftToRight',
    }, this.props.className);

    return (
      <div className={classes}>
        <Input
          className='material-input__input'
          {...this.props}
        />
        <div className='material-input__hr'>
          <hr className='material-input__hr_default' />
          <hr className='material-input__hr_active' />
        </div>
      </div>
    );
  }
}
