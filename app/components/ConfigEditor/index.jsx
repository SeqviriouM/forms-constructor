import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import cx from 'classnames';
import store from 'store';
import { connect } from 'react-redux';
import * as actionsForm from 'actions/form';
import Input from 'components/Input';
import Select from 'components/Select';
import Checkbox from 'components/Checkbox';
import './styles.scss';


@connect(state => ({
  currentComponentId: state.currentComponentId,
}))
export default class ConfigEditor extends React.Component {

  static propTypes = {
    currentComponentId: PropTypes.number,
    type: PropTypes.string.isRequired,
    config: PropTypes.instanceOf(Map).isRequired,
  }


  configChange = (e) => {
    const value = e.target.value;
    const type = e.target.getAttribute('data-type');


    if (this.props.type === 'form') {
      store.dispatch(actionsForm.updateFormConfig({
        type,
        value,
      }));
    } else {
      store.dispatch(actionsForm.updateComponent({
        type,
        value,
        currentId: this.props.currentComponentId,
      }));
    }
  }


  methodChange(e) {
    const value = e.value;
    const type = this['data-type'];

    store.dispatch(actionsForm.updateFormConfig({
      type,
      value,
    }));
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
            value={this.props.config.get('name')}
            placeholder={this.props.config.get('placeholder')}
            data-type="name"
            onChange={this.configChange}
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
            value={this.props.config.get('placeholder')}
            data-type="placeholder"
            onChange={this.configChange}
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
            onChange = {this.methodChange}
            data-type="method"
          />
        </div>
      );
    }
    return jsx;
  }


  getLabelControl = () => {
    let jsx = '';

    if (this.props.config && this.props.config.get('label') !== undefined) {
      jsx = (
        <div className='config-editor-item'>
          <div className='config-editor-item__title'>Label:</div>
          <Input
            className='config-editor-item__control'
            value={this.props.config.get('label')}
            data-type="label"
            onChange = {this.configChange}
          />
        </div>
      );
    }
    return jsx;
  }


  optionChange = (e) => {
    debugger;
    const value = e.target.value;
    const type = e.target.getAttribute('data-type');
    const optionId = parseInt(e.target.parentElement.parentElement.getAttribute('data-option-id'), 10);

    store.dispatch(actionsForm.updateOption({
      type,
      value,
      optionId,
      currentId: this.props.currentComponentId,
    }));
  }

  
  addOption = () => {
    store.dispatch(actionsForm.addOption({
        currentId: this.props.currentComponentId,
    }));
  }


  deleteOption = (e) => {
    const optionId = parseInt(e.target.parentElement.parentElement.getAttribute('data-option-id'), 10);
    store.dispatch(actionsForm.deleteOption({
      optionId,
      currentId: this.props.currentComponentId,
    }));
  }


  getOptionsControl = () => {
    let jsx = '';

    if (this.props.config && this.props.config.get('options')) {
      jsx = (
        <div className='config-editor-item'>
          <div className='config-editor-item__title'>Options:</div>
          <div className='config-editor-item__control'>
            {
              this.props.config.get('options').toJS().map((item) => {
                return (
                  <div className='config-editor-option' data-option-id={item.id}>
                    <div className='config-editor-option__item'>
                      <div className='config-editor-option__title'>Value:</div>
                      <Input
                        className='config-editor-option__control'
                        value={item.value}
                        data-type="value"
                        onChange={this.optionChange}
                      />
                      <div
                        className="config-editor-option__delete"
                        onClick={this.deleteOption}
                      >X</div>
                    </div>
                    <div className='config-editor-option__item'>
                      <div className='config-editor-option__title'>Label:</div>
                      <Input
                        className='config-editor-option__control'
                        value={item.label}
                        data-type="label"
                        onChange={this.optionChange}
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='config-editor-option__controls'>
            <div
              className='config-editor-option__add'
              onClick={this.addOption}
            >Add option</div>
          </div>
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
        {this.getLabelControl()}
        {this.getOptionsControl()}
      </div>
    );
  }


  render() {
    const classes = cx('config-editor');

    return (
      <div className={classes}>
        <div className='config-editor__title'>
          {this.getTitle()}
        </div>
        <div className='config-editor__content'>
          {this.getElementContent()}
        </div>
      </div>
    );
  }
}
