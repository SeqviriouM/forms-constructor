import React, { PropTypes } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import store from 'store';
import * as actionsForm from 'actions/form';
import Input from 'components/Input';
import './styles.scss';


@connect(state => ({
  currentComponentId: state.currentComponentId,
}))
export default class StyleEditor extends React.Component {

  static propTypes = {
    currentComponentId: PropTypes.number,
    type: PropTypes.string.isRequired,
    style: PropTypes.instanceOf(Map).isRequired,
  }

  
  updateStyle = (e) => {
    const value = e.target.value;
    const type = e.target.getAttribute('data-type');
  
    store.dispatch(actionsForm.updateStyle({
      value,
      type,
      currentId: this.props.currentComponentId,
    }))
  }

  getStyles = () => {
    let jsx = '';

    if (this.props.style) {
      jsx =Object.keys(this.props.style.toJS()).map((item) => {
        return (
          <div className='style-editor__item'>
            <div className='style-editor-item'>
              <div className='style-editor-item__title'>{item}</div>
              <div>
                <Input
                  className='style-editor__control'
                  value={this.props.style.get(item)}
                  data-type={item}
                  onChange={this.updateStyle}
                />
              </div>
            </div>
          </div>
        );
      })
    }

    return jsx;
  }


  render() {
    const classes = cx('style-editor', this.props.className);

    return (
      <div className={classes}>
        {this.getStyles()}
      </div>
    );
  }
}
