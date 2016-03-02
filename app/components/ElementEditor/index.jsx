import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import Select from 'components/Select';
import './styles.scss';


export default class ElementEditor extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    control: PropTypes.object.isRequired,
  }


  getTitle = () => {
    let jsx = (
      <span>Element Editor</span>
    );

    if (this.props.control.get('title')) {
      jsx = (
        <span>{this.props.control.get('title')}</span>
      );
    }
    return jsx;
  }


  getNameControl = () => {
    let jsx = '';
    if (this.props.control.get('name')) {
      jsx = (
        <div className='element-editor-item'>
          <div className='element-editor-item__title'>Name:</div>
          <Input
            className='element-editor-item__control'
            defaultValue={this.props.control.get('name')}
          />
        </div>
      );
    }
    return jsx;
  }


  getMethodControl = () => {
    let jsx = '';
    const methodOptions = [
      { value: 'get', label: 'GET' },
      { value: 'post', label: 'POST' },
    ];

    if (this.props.control.get('method')) {
      jsx = (
        <div className='element-editor-item'>
          <div className='element-editor-item__title'>Method:</div>
          <Select
            options={methodOptions}
            className='element-editor-item__control'
            value={this.props.control.get('method')}
          />
        </div>
      );
    }
    return jsx;
  }


  getElementContent() {
    return (
      <div>
        {this.getNameControl()}
        {this.getMethodControl()}
      </div>
    );
  }

  render() {
    const classes = cx('element-editor', this.props.className);

    return (
      <div className={classes}>
        <div className='element-editor__title'>
          {this.getTitle()}
        </div>
        <div className='element-editor__content'>
          {this.getElementContent()}
        </div>
      </div>
    );
  }
}
