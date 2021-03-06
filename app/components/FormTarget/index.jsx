import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import Label from 'components/Label';
import Element from 'components/Element';
import './styles.scss';


export default class FormTarget extends React.Component {

  static propTypes = {
    form: PropTypes.instanceOf(Map).isRequired,
  }


  constructor(props) {
    super(props);
  }


  getFormComponents = () => {
    let jsx = '';

    debugger;
    if (this.props.form.get('components')) {
      jsx = this.props.form.get('components').toJS().map((item) => {
        return (
          <div className='form-view-component'>
            { item.title ? <Label className='form-view-component__label'>{item.title}</Label> : '' }
            <div className='form-view-component__control'>
              <Element type={item.formControl.type} item={item} />
            </div>
          </div>
        );
      });
    }

    return jsx;
  }


  render() {
    const { form } = this.props;

    debugger;

    return (
        <div className='form-view-container'>
          <div className='form-view-wrapper'>
            <form
              className='form'
              name={form.get('config').get('name')}
              action={form.get('config').get('method')}
            >
              <div className='form-view__title'>
                <Label>{form.get('config').get('title')}</Label>
              </div>
              <div className='form-view__components'>
                {this.getFormComponents()}
              </div>
            </form>
          </div>
        </div>
          
    );
  }
}
