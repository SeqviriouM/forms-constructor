import React, { PropTypes } from 'react';
import { Map, is, fromJS } from 'immutable';
import { Motion, spring } from 'react-motion';
import store from 'store';
import * as actionsLocal from 'actions/currentComponentId';
import * as actionsForm from 'actions/form';
import MaterialInput from 'components/MaterialInput';
import FormComponent from 'components/FormComponent';
import './styles.scss';

const springConfig = {
  stiffness: 300,
  damping: 50,
};

function reinsert(arr, from, to) {
  if (from !== to) {
    const _arr = arr.slice(0);
    const val = _arr[from];
    _arr.splice(from, 1);
    _arr.splice(to, 0, val);
    return _arr;
  } else {
    return arr;
  }
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}


export default class Form extends React.Component {

  static propTypes = {
    form: PropTypes.instanceOf(Map).isRequired,
    toggleRightSidebar: PropTypes.func,
    toggleLeftSidebar: PropTypes.func,
  }


  constructor(props) {
    super(props);
  }

  state = {
    name: 'form',
    method: 'get',
    title: 'Form',
    mouse: 0,
    delta: 0,
    isPressed: false,
    lastPressed: 0,
  }


  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }


  getFormComponents() {
    return this.props.form.get('components').toJS().map((item /* , index */) => {
      const style = this.state.lastPressed === item.id && this.state.isPressed
        ? {
          scale: spring(1.1, springConfig),
          shadow: spring(16, springConfig),
          y: this.state.mouse,
        }
        : {
          scale: spring(1, springConfig),
          shadow: spring(1, springConfig),
          // y: spring(index * 100, springConfig),
          y: spring(0),
        };

      return (
        <Motion style={style} key={item.id}>
          {({ scale, shadow, y }) =>
            <FormComponent
              item={item}
              toggleRightSidebar={this.props.toggleRightSidebar}
              onMouseDown={this.handleMouseDown.bind(this, item.id, y)}
              onTouchStart={this.handleTouchStart.bind(this, item.id, y)}
              toggleLeftSidebar={this.props.toggleLeftSidebar}
              style={{
                boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                zIndex: this.state.isPressed && item.id === this.state.lastPressed ? 2 : 1,
              }}
            />
          }
        </Motion>
      );
    });
  }


  viewForm = () => {
    store.history.pushState(null, '/form-view');
  }


  getFormPreview() {
    let jsx = '';

    if (this.props.form.get('components').size) {
      jsx = (
        <div className='form-preview' onClick={this.viewForm}>
          Preview
        </div>
      );
    }

    return jsx;
  }


  handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  }


  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  }


  handleMouseDown = (pos, pressY, { pageY }) => {
    this.setState({
      delta: pageY - pressY,
      mouse: pressY,
      isPressed: true,
      lastPressed: pos,
    });
  }


  handleMouseMove = ({ pageY }) => {
    const { isPressed, delta, lastPressed } = this.state;
    if (isPressed) {
      const mouse = pageY - delta;
      const row = clamp(Math.round(mouse / 100), 0, this.props.form.get('components').size - 1);
      const newOrder = reinsert(this.props.form.get('components').toJS(), this.props.form.get('components').toJS().findIndex(val => val.id === lastPressed), row);
      this.setState({ mouse });
      if (!is(this.props.form.get('components'), fromJS(newOrder))) {
        store.dispatch(actionsForm.updateComponents({
          components: newOrder,
        }));
      }
    }
  }


  handleMouseUp = () => {
    this.setState({ isPressed: false, delta: 0 });
  }


  addFormComponent = () => {
    // TODO: Fix generating newComponetnID
    const newComponentID = this.props.form.get('components').size;
    store.dispatch(actionsForm.addComponent({
      id: newComponentID,
    }));
  }


  formEdit = () => {
    store.dispatch(actionsLocal.setComponentId({ currentId: -1 }));

    this.props.toggleRightSidebar();
  }


  formConfigChange = (e) => {
    const value = e.target.value;
    const type = e.target.getAttribute('data-type');

    store.dispatch(actionsForm.updateFormConfig({
      type,
      value,
    }));
  }


  render() {
    const { form } = this.props;

    return (
      <div className='form-container'>
        <div className='form-wrapper'>
          <form
            className='form'
            name={form.get('config').get('name')}
            action={form.get('config').get('method')}
          >
            <a className='form__edit' onClick={this.formEdit}>
              <svg
                aria-hidden='true'
                className='pencil'
                height='16'
                role='img'
                version='1.1'
                viewBox='0 0 14 16'
                width='14'
              >
                <path
                  d='M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z'
                >
                </path>
              </svg>
            </a>
            <div className='form__title'>
              <MaterialInput
                defaultValue={this.props.form.get('config').get('title')}
                onChange = {this.formConfigChange}
                data-type="title"
              />
            </div>
            <div className='form__components'>
              {this.getFormComponents()}
            </div>
            <div className='form__add-component' onClick={this.addFormComponent}>
              <span>+</span>
            </div>
          </form>
          {this.getFormPreview()}
        </div>
      </div>
    );
  }
}
