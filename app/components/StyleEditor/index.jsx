import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import MaterialInput from 'components/MaterialInput';
import './styles.scss';

export default class StyleEditor extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }


  getColor = () => {
    let jsx = '';
    jsx = (
      <div className='style-editor-item'>
        <div className='style-editor-item__title'>Color:</div>
        <div>
          <Input className='style-editor__control'/>
        </div>
      </div>
    );
    return jsx;
  }


  render() {
    const classes = cx('style-editor', this.props.className);

    return (
      <div className={classes}>
        <div className='style-editor__item'>
          {this.getColor()}
        </div>
        <div className='style-editor__item'>
          {this.getColor()}
        </div>
        <div className='style-editor__item'>
          {this.getColor()}
        </div>
        <div className='style-editor__item'>
          {this.getColor()}
        </div>
        <div className='style-editor__item'>
          {this.getColor()}
        </div>
      </div>
    );
  }
}
