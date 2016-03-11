import React from 'react';
import InfoMessage from 'components/InfoMessage';
import Input from 'components/Input';
import Button from 'components/Button';
import SVGButton from 'components/SVGButton';
import DocumentTitle from 'react-document-title';
import store from 'store';
import './styles.scss';


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.timers = [];
    this.state = {
      info: {
        type: 'info',
        text: 'Enter your email and password',
      },
      shakeInfo: false,
      inProgress: false,
    };
  }


  componentWillUnmount = () => {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
  }


  auth = (e) => {
    e.preventDefault();
    store.history.push('/');
  }

  render() {
    return (
      <DocumentTitle title='Login page'>
        <form
          className='login'
          onSubmit={this.auth}
        >
          <InfoMessage
            className='login__info-message'
            type={this.state.info.type}
            shake={this.state.shakeInfo}
          >{this.state.info.text}</InfoMessage>
          <Input
            className='login__input'
            value={this.state.email}
            name='email'
            placeholder='Email'
          />
          <Input
            className='login__input'
            value={this.state.password}
            type='password'
            name='password'
            placeholder='Password'
          />
          <Button
            className='login__submit-button'
            type='submit'
            inProgress={this.state.inProgress}
          >{this.state.inProgress ? 'Logging in' : 'Log In'}</Button>
          <SVGButton className='login__submit-button'>
            Log In
          </SVGButton>
        </form>
      </DocumentTitle>
    );
  }
}
