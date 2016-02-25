import React, { PropTypes } from 'react';
import cx from 'classnames';
import Input from 'components/Input';
import Select from 'components/Select';
import './styles.scss';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: 'form',
    method: 'get',
    editTitle: false,
  }

  render() {
    const methodOptions = [
      { value: 'get', label: 'GET' },
      { value: 'post', label: 'POST' },
    ];

    return (
      <div className='form-container'>
        <div className='form'>
          <form name={this.state.name} action={this.state.method}>
            <Input className='form__title' value='Form'/>
            <div className='form__method'>
              <Select options={methodOptions} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
