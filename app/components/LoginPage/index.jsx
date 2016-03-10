import React, { PropTypes } from 'react';
import LoginWindow from 'components/LoginWindow';
import './styles.scss';


export default class LoginPage extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }


  render() {
    return (
      <div className='login-page'>
        <div className='login-wrapper'>
          <LoginWindow>{this.props.children}</LoginWindow>
        </div>
      </div>
    );
  }
}
