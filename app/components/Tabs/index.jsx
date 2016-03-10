import React, { PropTypes, cloneElement } from 'react';
import cx from 'classnames';
import './styles.scss';

export default class Tabs extends React.Component {

  static propTypes = {
    currentTabId: PropTypes.number,
    changeTab: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTabId: this.props.currentTabId || 1,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    return !(nextState.currentTabId !== this.state.currentTabId &&
    nextProps.currentTabId !== this.props.currentTabId);
  }


  changeTab = (tabId) => {
    this.setState({
      currentTabId: tabId,
    });
  }


  render() {
    const { className, currentTabId, changeTab } = this.props;
    const children = [].concat(this.props.children);
    const tabWidth = `${100 / children.length}%`;

    const getChildren = () => children.map((tabElement, i) => cloneElement(tabElement, {
      isCurrent: (currentTabId || this.state.currentTabId) === tabElement.props.id,
      width: tabWidth,
      key: i,
      changeTab: changeTab || this.changeTab,
    }));


    return (
      <div className={cx('tabs', className)}>
        <div className='tabs__hr-wrapper'>
          <hr className='tabs__hr' style={{
            left: `${parseInt(tabWidth, 10) * (this.props.currentTabId - 1)}%`,
            width: `${tabWidth}`,
          }}
          />
        </div>
        {getChildren()}
      </div>
    );
  }
}
