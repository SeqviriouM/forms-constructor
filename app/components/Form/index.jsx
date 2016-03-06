import React, { PropTypes } from 'react';
import { Map, is, fromJS } from 'immutable';
import { Motion, spring } from 'react-motion';
import store from 'store';
import * as actionsForm from 'actions/form';
import Input from 'components/Input';
import Label from 'components/Label';
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
    editTitle: false,
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


  getTitle() {
    let jsx = '';

    if (this.state.editTitle) {
      jsx = (
        <Input
          className='form__title_input'
          defaultValue={this.props.form.get('title')}
        />
      );
    } else {
      jsx = (<Label
        className='form__title_label'
        labelOnDoubleClick={this.editTitle}
      >
        <span>{this.props.form.get('title')}</span>
      </Label>);
    }
    return jsx;
  }


  getFormComponents() {
    return this.props.form.get('components').toJS().map((item, index) => {
      const style = this.state.lastPressed === item.id && this.state.isPressed
        ? {
          scale: spring(1.1, springConfig),
          shadow: spring(16, springConfig),
          y: this.state.mouse,
        }
        : {
          scale: spring(1, springConfig),
          shadow: spring(1, springConfig),
          y: spring(index * 100, springConfig),
        };

      return (
        <Motion style={style} key={item.id}>
          {({ scale, shadow, y }) =>
            <FormComponent
              item={item}
              deleteComponent={this.deleteComponent}
              cancelDeletionComponent={this.cancelDeletionComponent}
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
      this.setState({ mouse: mouse });
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


  editTitle = (e) => {
    e.preventDefault();

    this.setState({
      editTitle: !this.state.editTitle,
    });
  }


  addFormComponent = () => {
    // TODO: Fix generating newComponetnID
    const newComponentID = this.props.form.get('components').size;
    store.dispatch(actionsForm.addComponent({
      id: newComponentID,
    }));
  }


  deleteComponent = (e) => {
    store.dispatch(actionsForm.deleteComponent({
      id: parseInt(e.currentTarget.dataset.id, 10),
    }));
  }


  cancelDeletionComponent = (e) => {
    store.dispatch(actionsForm.cancelDeletionComponent({
      id: parseInt(e.currentTarget.dataset.id, 10),
    }));
  }


  render() {
    const { form } = this.props;

    return (
      <div className='form-container'>
        <div className='form-wrapper'>
          <form
            className='form'
            name={form.get('name')}
            action={form.get('method')}
          >
            <div className='form__edit' onClick={this.props.toggleRightSidebar}>
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
            </div>
            <div>
              {this.getTitle()}
            </div>
            <div className='form__components' style={{ height: `${100 * this.props.form.get('components').size}px` }}>
              {this.getFormComponents()}
            </div>
            <div className='form__add-component' onClick={this.addFormComponent}>
              <span>+</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
