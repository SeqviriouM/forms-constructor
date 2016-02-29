import React from 'react';
import DateTime from 'react-datetime';
import './styles.scss';


export default class Datepicker extends React.Component {
  render() {
    return (
      <DateTime inputProps={{ readOnly: true }} />
    );
  }
}
