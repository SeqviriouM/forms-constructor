import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Header from 'components/Header';
import ElementsContainer from 'components/ElementsContainer';
import BurgerMenu from 'react-burger-menu';
import 'styles/main.scss';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
  }

  onSetSidebarOpen = (open) => {
    debugger;
    this.setState({ sidebarOpen: open });
  }


  render() {
    const SlidingMenu = BurgerMenu['elastic'];

    return (
      <DocumentTitle title='Form Constructor'>
        <div className='form-constructor-page'>
          <Header />
          <div className='container' id='outer-container'>
            <SlidingMenu
              pageWrapperId={'inner-container'}
              outerContainerId={'outer-container'}
              width={300}
              id={'stack'}
              left
            >
              <ElementsContainer count={5}/>
            </SlidingMenu>
            <div className='content' id='inner-container'>
              Hello world
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
