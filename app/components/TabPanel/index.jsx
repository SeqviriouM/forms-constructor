import React, { PropTypes } from 'react';
import './styles.scss';


export default class TabPanel extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    children: PropTypes.node,
  }

  render() {
    return <div data-tabId={this.props.id}>{this.props.children}</div>;
  }
}
