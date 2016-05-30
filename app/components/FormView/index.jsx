import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PopUp from 'components/PopUp';
import FormTarget from 'components/FormTarget';
import './styles.scss';

@connect(state => ({
  form: state.form,
}))
export default class FormView extends React.Component {

  static propTypes = {
    form: PropTypes.instanceOf(Map).isRequired,
  }


  constructor(props) {
    super(props);
  }


  downloadForm = (e) => {
    const { form } = this.props;

    // fetch('download', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(form),
    // })
  }


  render() {
    const { form } = this.props;

    debugger;

    return (
      <div>
        <PopUp>
          <FormTarget form={form} />
          <div className='form-view__download' onClick={this.downloadForm}>
            Download
          </div>
        </PopUp>
        <Link to='/'>
          <div className='form-view__overlay' />
        </Link>
      </div>
    );
  }
}
