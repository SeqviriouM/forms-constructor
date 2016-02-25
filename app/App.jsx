import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import BurgerMenu from 'react-burger-menu';
import Header from 'components/Header';
import ElementsContainer from 'components/ElementsContainer';
import Form from 'components/Form';
import 'styles/main.scss';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
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
              width={350}
              id={'stack'}
              left
            >
              <ElementsContainer/>
            </SlidingMenu>
            <div id='inner-container'>
              <Form />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
