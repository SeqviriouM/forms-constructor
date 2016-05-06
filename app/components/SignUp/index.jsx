import React from 'react';
import cx from 'classnames';
import store from 'store';
import InfoMessage from 'components/InfoMessage';
import Input from 'components/Input';
import Button from 'components/Button';
import SVGButton from 'components/SVGButton';
import DocumentTitle from 'react-document-title';
import './styles.scss';


export default class SignUp extends React.Component {

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
      repeatedPassword: '',
      showEmailError: false,
      showPasswordError: false,
      showRepeatedPasswordError: false,
      shakeInfo: false,
      inProgress: false,
    };
  }


  componentWillUnmount = () => {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
  }


  signUp = (e) => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const repeatedPassword = this.state.repeatedPassword;

    if (!email) {
      return this.setState({
        showEmailError: true,
        info: {
          type: 'error',
          text: 'Email is required',
        },
      });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return this.setState({
        showEmailError: true,
        info: {
          type: 'error',
          text: 'Valid email is required',
        },
      });
    }

    if (!password) {
      return this.setState({
        showPasswordError: true,
        showSecondPasswordError: true,
        info: {
          type: 'error',
          text: 'Password is required',
        },
      });
    }

    if (password !== repeatedPassword) {
      return this.setState({
        showSecondPasswordError: true,
        info: {
          type: 'error',
          text: 'The passwords don\'t match. Please check and try again.',
        },
      });
    }

    const signUpData = {
      email,
      password,
    };

    this.setState({
      inProgress: true,
    });

    fetch('/signup', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then(() => {
          debugger;
          store.history.pushState(null, '/');
        });
      }
    });
  }


  checkEmailExist = (email) => {
    this.setState({
      info: {
        type: 'info',
        text: 'Fill these fields',
      },
      showEmailError: false,
      email,
    });
  }


  emailChange = (e) => {
    const email = e.target.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      return this.setState({
        showEmailError: true,
        info: {
          type: 'error',
          text: 'Valid email is required',
        },
      });
    }

    this.checkEmailExist(email);
  }


  passwordChange = (e) => {
    const password = e.target.value;

    this.setState({
      password,
      showPasswordError: false,
      showRepeatedPasswordError: false,
    });
  }


  repeatedPasswordChange = (e) => {
    const repeatedPassword = e.target.value;

    if (repeatedPassword.length) {
      this.setState({
        repeatedPassword,
        showPasswordError: false,
        showRepeatedPasswordError: false,
      });
    }
  }


  render() {
    return (
      <DocumentTitle title='Sign Up page'>
        <form
          className='sign-up'
          onSubmit={this.signUp}
        >
          <InfoMessage
            className='sign-up__info-message'
            type={this.state.info.type}
            shake={this.state.shakeInfo}
          >{this.state.info.text}</InfoMessage>
          <Input
            className={cx('sign-up__input', {
              input_type_error: this.state.showEmailError,
              input_type_success: !this.state.showEmailError && this.state.email,
            })}
            placeholder='Email'
            onChange={this.emailChange}
          />
          <Input
            className='sign-up__input'
            type='password'
            placeholder='Password'
            onChange={this.passwordChange}
          />
          <Input
            className='sign-up__input'
            type='password'
            placeholder='Repeat password'
            onChange={this.repeatedPasswordChange}
          />
          <Button
            className='sign-up__submit-button'
            type='submit'
            inProgress={this.state.inProgress}
          >{this.state.inProgress ? 'Signing up' : 'Sign Up'}</Button>
          <SVGButton className='sign-up__submit-button'>
            Sign Up
          </SVGButton>
        </form>
      </DocumentTitle>
    );
  }
}
