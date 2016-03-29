import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import cx from 'classnames';
import Input from 'components/Input';
import Select from 'components/Select';
import './styles.scss';

export default class ConfigEditor extends React.Component {

  static propTypes = {
    config: PropTypes.instanceOf(Map).isRequired,
  }


  getTitle = () => {
    let jsx = (
      <span>Config Editor</span>
    );

    if (this.props.config && this.props.config.get('title')) {
      jsx = (
        <span>{this.props.config.get('title')}</span>
      );
    }
    return jsx;
  }


  getNameControl = () => {
    let jsx = '';
    if (this.props.config && this.props.config.get('name') !== undefined) {
      jsx = (
        <div className='config-editor-item'>
          <div className='config-editor-item__title'>Name:</div>
          <Input
            className='config-editor-item__control'
            defaultValue={this.props.config.get('name')}
          />
        </div>
      );
    }
    return jsx;
  }


  getPlaceholderControl = () => {
    let jsx = '';
    if (this.props.config && this.props.config.get('placeholder') !== undefined) {
      jsx = (
        <div className='config-editor-item'>
          <div className='config-editor-item__title'>Placeholder:</div>
          <Input
            className='config-editor-item__control'
            defaultValue={this.props.config.get('placeholder')}
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

    if (this.props.config && this.props.config.get('method') !== undefined) {
      jsx = (
        <div className='config-editor-item'>
          <div className='config-editor-item__title'>Method:</div>
          <Select
            options={methodOptions}
            className='config-editor-item__control'
            value={this.props.config.get('method')}
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
        {this.getPlaceholderControl()}
      </div>
    );
  }


  render() {
    const classes = cx('config-editor');

    return (
      <div>
        <div className={classes}>
          {this.getTitle()}
        </div>
        <div className='config-editor__content'>
          {this.getElementContent()}
        </div>
      </div>
    );
  }
}
