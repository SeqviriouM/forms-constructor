import React from 'react';
import cookies from 'browser-cookies';
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
      email: '',
      password: '',
      shakeInfo: false,
      inProgress: false,
    };
  }


  componentWillUnmount = () => {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
  }


  signin = (e) => {
    e.preventDefault();

    const signInData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({
      inProgress: true,
    });

    fetch('signin', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(signInData),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          this.setState({
            inProgress: false,
          });

          cookies.set('sessionId', data.sessionId, { expires: 365 });
          store.history.push('/');
        });
      } else {
        return;
      }
    });
  }


  emailChange = (e) => {
    const email = e.target.value;

    this.setState({
      email,
    });
  }


  passwordChange = (e) => {
    const password = e.target.value;

    this.setState({
      password,
    });
  }


  render() {
    return (
      <DocumentTitle title='Login page'>
        <form
          className='login'
          onSubmit={this.signin}
        >
          <InfoMessage
            className='login__info-message'
            type={this.state.info.type}
            shake={this.state.shakeInfo}
          >{this.state.info.text}</InfoMessage>
          <Input
            className='login__input'
            placeholder='Email'
            onChange={this.emailChange}
          />
          <Input
            className='login__input'
            value={this.state.password}
            type='password'
            placeholder='Password'
            onChange={this.passwordChange}
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
