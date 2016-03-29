import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import Select from 'components/Select';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import TabPanel from 'components/TabPanel';
import TabContent from 'components/TabContent';
import StyleEditor from 'components/StyleEditor';
import './styles.scss';


export default class ElementEditor extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    control: PropTypes.object.isRequired,
  }


  constructor(props) {
    super(props);
    this.state = {
      currentTabId: 1,
    };
  }


  getTitle = () => {
    let jsx = (
      <span>Element Editor</span>
    );

    if (this.props.control && this.props.control.get('config') && this.props.control.get('config').get('title')) {
      jsx = (
        <span>{this.props.control.get('config').get('title')}</span>
      );
    }
    return jsx;
  }


  getNameControl = () => {
    let jsx = '';
    if (this.props.control && this.props.control.get('config') && this.props.control.get('config').get('name') !== undefined) {
      jsx = (
        <div className='element-editor-item'>
          <div className='element-editor-item__title'>Name:</div>
          <Input
            className='element-editor-item__control'
            defaultValue={this.props.control.get('config').get('name')}
          />
        </div>
      );
    }
    return jsx;
  }


  getPlaceholderControl = () => {
    let jsx = '';
    if (this.props.control && this.props.control.get('config') && this.props.control.get('config').get('placeholder') !== undefined) {
      jsx = (
        <div className='element-editor-item'>
          <div className='element-editor-item__title'>Placeholder:</div>
          <Input
            className='element-editor-item__control'
            defaultValue={this.props.control.get('config').get('placeholder')}
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

    if (this.props.control && this.props.control.get('config') && this.props.control.get('config').get('method') !== undefined) {
      jsx = (
        <div className='element-editor-item'>
          <div className='element-editor-item__title'>Method:</div>
          <Select
            options={methodOptions}
            className='element-editor-item__control'
            value={this.props.control.get('config').get('method')}
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


  changeTab = (tabId) => {
    this.setState({
      currentTabId: tabId,
    });
  };


  render() {
    const classes = cx('element-editor', this.props.className);

    return (
      <div className={classes}>
        <Tabs
          currentTabId={this.state.currentTabId}
          changeTab={this.changeTab}
          className='threads__tabs'
        >
          <Tab id={1}>Config</Tab>
          <Tab id={2}>Style</Tab>
        </Tabs>
        <TabContent currentTabId={this.state.currentTabId}>
          <TabPanel id={1}>
            <div className='element-editor__title'>
              {this.getTitle()}
            </div>
            <div className='element-editor__content'>
              {this.getElementContent()}
            </div>
          </TabPanel>
          <TabPanel id={2}>
            <StyleEditor />
          </TabPanel>
        </TabContent>
      </div>
    );
  }
}
