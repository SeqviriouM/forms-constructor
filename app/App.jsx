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
      sidebarRightOpen: false,
    };
  }

  onStateChangeRightSidebar = (state) => {
    if (this.state.sidebarRightOpen !== state.isOpen) {
      this.setState({
        sidebarRightOpen: state.isOpen,
      });
    }
  }

  toggleRightSidebar = () => {
    this.setState({
      sidebarRightOpen: !this.state.sidebarRightOpen,
    });
  }

  render() {
    const ElasticMenu = BurgerMenu.elastic;
    const SlidingMenu = BurgerMenu.slide;

    return (
      <DocumentTitle title='Form Constructor'>
        <div className='form-constructor-page'>
          <Header />
          <div className='container' id='outer-container'>
            <div className='element-container'>
              <ElasticMenu
                pageWrapperId={'inner-container'}
                outerContainerId={'outer-container'}
                width={350}
                id={'stack'}
                left
              >
                <ElementsContainer/>
              </ElasticMenu>
            </div>
            <div id='inner-container'>
              <Form toggleRightSidebar={this.toggleRightSidebar}/>
            </div>
            <div className='element-editor'>
              <SlidingMenu
                pageWrapperId={'inner-container'}
                outerContainerId={'outer-container'}
                width={350}
                id={'element-editor'}
                isOpen={this.state.sidebarRightOpen}
                onStateChange={this.onStateChangeRightSidebar}
                right
              >
                <div>
                  Element constructor
                </div>
              </SlidingMenu>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
