import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import Label from 'components/Label';
import Select from 'components/Select';
import './styles.scss';


export default class Form extends React.Component {

  static propTypes = {
    toggleRightSidebar: PropTypes.func,
  }


  constructor(props) {
    super(props);
  }

  state = {
    name: 'form',
    method: 'get',
    title: 'Form',
    editTitle: false,
  }


  getTitle() {
    let jsx = '';

    if (this.state.editTitle) {
      jsx = (
        <Input
          className='form__title_input'
          defaultValue={this.state.title}
          onClick={this.editTitle}
        />
      );
    } else {
      jsx = <Label className='form__title_label'>{this.state.title}</Label>;
    }
    return jsx;
  }


  editTitle = () => {
    debugger;
    this.setState({
      editTitle: !this.state.editTitle
    });
  }


  render() {
    return (
      <div className='form-container'>
        <div className='form-wrapper'>
          <form className='form' name={this.state.name} action={this.state.method}>
            <div className='form__edit' onClick={this.props.toggleRightSidebar}>
              <svg aria-hidden='true' className='pencil' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'>
                <path d='M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z'>
                </path>
              </svg>
            </div>
            <div>
              {this.getTitle()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
