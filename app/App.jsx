import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import { Map } from 'immutable';
import * as actionsForm from 'actions/form';
import DocumentTitle from 'react-document-title';
import BurgerMenu from 'react-burger-menu';
import Header from 'components/Header';
import ElementsContainer from 'components/ElementsContainer';
import Form from 'components/Form';
import 'styles/main.scss';

@connect(state => ({
  form: state.form,
}))
export default class Application extends React.Component {
  static propTypes = {
    form: PropTypes.instanceOf(Map).isRequired,
  }


  constructor(props) {
    super(props);
    this.state = {
      sidebarRightOpen: false,
    };
  }


  componentWillMount = () => {
    store.dispatch(actionsForm.getDefaultData());
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
    const { form } = this.props;
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
              <Form
                form={form}
                toggleRightSidebar={this.toggleRightSidebar}
              />
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
