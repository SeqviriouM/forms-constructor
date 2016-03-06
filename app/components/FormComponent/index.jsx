import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';
import './styles.scss';


export default class Form extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    deleteComponent: PropTypes.func.isRequired,
    cancelDeletionComponent: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.Object,
  }


  render() {
    const classes = cx('component', {
      component_deleted: this.props.item.isDeleted,
    }, this.props.className);

    return (
      <div
        className={classes}
        data-id={this.props.item.id}
        onMouseDown={this.props.onMouseDown}
        onTouchStart={this.props.onTouchStart}
        style={this.props.style}
      >
        <div className='component__title'>
          <span>{this.props.item.title}-{this.props.item.id}</span>
        </div>
        <div>
          <span className='component__add-control'>Add control</span>
        </div>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(!this.props.item.isDeleted ? 0 : -30, [140, 12]) }}
        >
          {interpolated => <div
            className='component__delete'
            data-id={this.props.item.id}
            onClick={this.props.deleteComponent}
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
          style={{ x: spring(this.props.item.isDeleted ? -100 : 0, [40, 12]) }}
        >
          {interpolated => <div
            className='component__cancel'
            data-id={this.props.item.id}
            onClick={this.props.cancelDeletionComponent}
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
