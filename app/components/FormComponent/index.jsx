import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';
import store from 'store';
import * as actionsForm from 'actions/form';
import * as currentControlIdActions from 'actions/currentControlId';
import Element from 'components/Element';
import './styles.scss';


export default class Form extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    onMouseDown: PropTypes.func,
    onTouchStart: PropTypes.func,
    toggleLeftSidebar: PropTypes.func,
    toggleRightSidebar: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.Object,
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


  editControl = (e) => {
    store.dispatch(currentControlIdActions.setControlId({
      currentId: parseInt(e.currentTarget.dataset.id, 10),
    }));
    this.props.toggleRightSidebar(arguments);
  }


  getControl() {
    let jsx = '';
    if (Object.keys(this.props.item.formControl).length > 0) {
      jsx = <Element type={this.props.item.formControl.type} />;
    } else {
      jsx = (
        <span
          className='component__add-control'
          onClick={this.props.toggleLeftSidebar}
        >
          Add control
        </span>
      );
    }
    return jsx;
  }


  render() {
    const classes = cx('component', {
      component_deleted: this.props.item.isDeleted,
    }, this.props.className);

    return (
      <div
        className={classes}
        data-id={this.props.item.id}
        style={this.props.style}
      >
        <div className='component__title'>
          <span>{this.props.item.title}-{this.props.item.id}</span>
        </div>
        <div className='compoennt__control'>
          {this.getControl()}
        </div>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(this.props.item.isDeleted ? -30 : 0, { stiffness: 140, damping: 10 }) }}
        >
          {interpolated => <div
            className='component__edit'
            data-id={this.props.item.id}
            onClick={this.editControl}
            style={{ transform: `translateX(${interpolated.x}px)` }}
          >
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
            }
        </Motion>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(this.props.item.isDeleted ? -30 : 0, { stiffness: 140, damping: 10 }) }}
        >
          {interpolated => <div
            className='component__draggable'
            onMouseDown={this.props.onMouseDown}
            onTouchStart={this.props.onTouchStart}
            style={{ transform: `translateX(${interpolated.x}px)` }}
          >
            <svg viewBox='0 0 32 32' width='20' height='20'>
              <path d='M31.338,14.538L27.38,10.58C26.994,10.193,26.531,10,26,10c-1.188,0-2,1.016-2,2c0,0.516,0.186,0.986,0.58,1.38L25.2,14H18  V6.8l0.62,0.62C19.014,7.814,19.484,8,20,8c0.984,0,2-0.813,2-2c0-0.531-0.193-0.994-0.58-1.38l-3.973-3.974  C17.08,0.279,16.729,0,16,0s-1.135,0.334-1.463,0.662L10.58,4.62C10.193,5.006,10,5.469,10,6c0,1.188,1.016,2,2,2  c0.516,0,0.986-0.186,1.38-0.58L14,6.8V14H6.8l0.62-0.62C7.814,12.986,8,12.516,8,12c0-0.984-0.813-2-2-2  c-0.531,0-0.994,0.193-1.38,0.58l-3.958,3.958C0.334,14.866,0,15.271,0,16s0.279,1.08,0.646,1.447L4.62,21.42  C5.006,21.807,5.469,22,6,22c1.188,0,2-1.016,2-2c0-0.516-0.186-0.986-0.58-1.38L6.8,18H14v7.2l-0.62-0.62  C12.986,24.186,12.516,24,12,24c-0.984,0-2,0.813-2,2c0,0.531,0.193,0.994,0.58,1.38l3.957,3.958C14.865,31.666,15.271,32,16,32  s1.08-0.279,1.447-0.646l3.973-3.974C21.807,26.994,22,26.531,22,26c0-1.188-1.016-2-2-2c-0.516,0-0.986,0.186-1.38,0.58L18,25.2V18  h7.2l-0.62,0.62C24.186,19.014,24,19.484,24,20c0,0.984,0.813,2,2,2c0.531,0,0.994-0.193,1.38-0.58l3.974-3.973  C31.721,17.08,32,16.729,32,16S31.666,14.866,31.338,14.538z'/>
            </svg>
            </div>
            }
        </Motion>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(!this.props.item.isDeleted ? 0 : -30, { stiffness: 140, damping: 10 }) }}
        >
          {interpolated => <div
            className='component__delete'
            data-id={this.props.item.id}
            onClick={this.deleteComponent}
            style={{ transform: `translateX(${interpolated.x}px)` }}
          >
            <span>
              <svg enable-background='new 0 0 139 139' height='20' viewBox='0 0 139 139' width='20'>
                <path d='M114.115,28.505v-0.281c0-9.937-6.001-17.992-13.402-17.992H38.288c-7.406,0-13.408,8.056-13.408,17.992v0.281H114.115z'/>
                <path d='M114.592,43.842c-1.495-1.749-3.68-2.758-5.983-2.758H30.391c-2.304,0-4.491,1.009-5.986,2.758  c-1.496,1.752-2.149,4.068-1.79,6.345l11.373,71.939c0.604,3.827,3.9,6.642,7.776,6.642h55.47c3.873,0,7.17-2.814,7.776-6.642  l11.373-71.939C116.743,47.91,116.088,45.594,114.592,43.842z M47.433,118.075c-0.132,0.012-0.266,0.018-0.396,0.018  c-2.307,0-4.271-1.765-4.475-4.108l-4.703-53.772c-0.218-2.473,1.615-4.655,4.088-4.869c2.454-0.266,4.657,1.612,4.872,4.088  l4.705,53.773C51.739,115.678,49.909,117.862,47.433,118.075z M73.997,113.597c0,2.482-2.017,4.496-4.5,4.496  c-2.485,0-4.498-2.014-4.498-4.496V59.617c0-2.485,2.014-4.498,4.498-4.498c2.484,0,4.5,2.015,4.5,4.498V113.597z M95.859,113.984  c-0.203,2.344-2.165,4.108-4.474,4.108c-0.128,0-0.265-0.006-0.397-0.018c-2.474-0.213-4.307-2.402-4.088-4.87l4.701-53.773  c0.216-2.476,2.403-4.343,4.873-4.088c2.477,0.214,4.304,2.397,4.087,4.869L95.859,113.984z'/>
              </svg>
            </span>
          </div>
            }
        </Motion>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(this.props.item.isDeleted ? -100 : 0, { stiffness: 140, damping: 12 }) }}
        >
          {interpolated => <div
            className='component__cancel'
            data-id={this.props.item.id}
            onClick={this.cancelDeletionComponent}
            style={{ transform: `translateX(${interpolated.x}px)` }}
          >
            <span>
              <svg enable-background='new 0 0 139 139' height='20' viewBox='0 0 139 139' width='20'>
                <path d='M114.115,28.505v-0.281c0-9.937-6.001-17.992-13.402-17.992H38.288c-7.406,0-13.408,8.056-13.408,17.992v0.281H114.115z'/>
                <path d='M114.592,43.842c-1.495-1.749-3.68-2.758-5.983-2.758H30.391c-2.304,0-4.491,1.009-5.986,2.758  c-1.496,1.752-2.149,4.068-1.79,6.345l11.373,71.939c0.604,3.827,3.9,6.642,7.776,6.642h55.47c3.873,0,7.17-2.814,7.776-6.642  l11.373-71.939C116.743,47.91,116.088,45.594,114.592,43.842z M47.433,118.075c-0.132,0.012-0.266,0.018-0.396,0.018  c-2.307,0-4.271-1.765-4.475-4.108l-4.703-53.772c-0.218-2.473,1.615-4.655,4.088-4.869c2.454-0.266,4.657,1.612,4.872,4.088  l4.705,53.773C51.739,115.678,49.909,117.862,47.433,118.075z M73.997,113.597c0,2.482-2.017,4.496-4.5,4.496  c-2.485,0-4.498-2.014-4.498-4.496V59.617c0-2.485,2.014-4.498,4.498-4.498c2.484,0,4.5,2.015,4.5,4.498V113.597z M95.859,113.984  c-0.203,2.344-2.165,4.108-4.474,4.108c-0.128,0-0.265-0.006-0.397-0.018c-2.474-0.213-4.307-2.402-4.088-4.87l4.701-53.773  c0.216-2.476,2.403-4.343,4.873-4.088c2.477,0.214,4.304,2.397,4.087,4.869L95.859,113.984z'/>
              </svg>
            </span>
          </div>
            }
        </Motion>
      </div>
    );
  }
}
