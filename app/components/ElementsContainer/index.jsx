import React, { PropTypes } from 'react';
import Element from 'components/Element';
import './styles.scss';

export default class ElementsContainer extends React.Component {
  static propTypes = {
    count: PropTypes.number,
  }


  getAllElemetns = () => {
    const count = Array.from(new Array(this.props.count));
    const jsx = count.map((item, index) => {
      return (
        <Element type={(index % 2 === 0) ? 'input' : 'select'} />
      );
    });

    return jsx;
  }

  render() {
    return (
      <div className='elements-container'>
        { this.getAllElemetns() }
      </div>
    );
  }
}
