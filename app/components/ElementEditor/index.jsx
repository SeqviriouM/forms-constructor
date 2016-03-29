import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import Select from 'components/Select';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import TabPanel from 'components/TabPanel';
import TabContent from 'components/TabContent';
import ConfigEditor from 'components/ConfigEditor';
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
            <ConfigEditor config={this.props.control.get('config')} />
          </TabPanel>
          <TabPanel id={2}>
            <StyleEditor />
          </TabPanel>
        </TabContent>
      </div>
    );
  }
}
