import React, { PropTypes } from 'react';
import Select from 'react-select';
import cx from 'classnames';
import './styles.scss';
import 'react-select/dist/react-select.css';


export default class Input extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }


  shouldComponentUpdate = () => {
    return false;
  }


  getOptions = () => {
    return [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
  }

  render() {
    return (
      <Select
        value='option1'
        options={this.getOptions()}
      />
    );
  }
}