import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
import cx from 'classnames';
import './styles.scss';
import 'react-select/dist/react-select.css';


export default class Select extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.Array,
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
  }

  shouldComponentUpdate() {
    return false;
  }


  getOptions() {
    return this.props.options ? this.props.options : [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];
  }

  render() {
    const options = this.getOptions();
    const value = this.props.value ? this.props.value : options[0].value;
    const classes = cx('select', this.props.className);

    return (
      <ReactSelect
        value={value}
        options={options}
        className={classes}
      />
    );
  }
}
