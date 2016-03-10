import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import cx from 'classnames';
import './styles.scss';


export default class TabPanel extends React.Component {

  static propTypes = {
    currentTabId: PropTypes.number.isRequired,
    children: PropTypes.node,
  }


  constructor(props) {
    super(props);
  }


  shouldComponentUpdate(nextProps) {
    return !Immutable.is(nextProps, this.props);
  }


  getTabContent() {
    let jsx;

    this.props.children.forEach((item) => {
      if (item.props.id === this.props.currentTabId) {
        jsx = item.props.children;
      }
    });

    return jsx;
  }


  render() {
    const properties = {
      className: cx('tab__panel'),
    };

    return <div {...properties}>{this.getTabContent()}</div>;
  }
}
