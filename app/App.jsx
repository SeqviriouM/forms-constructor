import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import DocumentTitle from 'react-document-title';
import BurgerMenu from 'react-burger-menu';
import { currentControlSelector } from 'selectors/currentControlSelector';
import Header from 'components/Header';
import ElementsContainer from 'components/ElementsContainer';
import ElementEditor from 'components/ElementEditor';
import Form from 'components/Form';
import 'styles/main.scss';

@connect(state => ({
  form: state.form,
  currentControlId: -1,
  currentControl: currentControlSelector(state),
}))
export default class Application extends React.Component {
  static propTypes = {
    form: PropTypes.instanceOf(Map).isRequired,
    currentControlId: PropTypes.number,
    currentControl: PropTypes.instanceOf(Map).isRequired,
  }


  constructor(props) {
    super(props);
    this.state = {
      sidebarRightOpen: false,
      sidebarLeftOpen: false,
    };
  }


  onStateChangeRightSidebar = (state) => {
    if (this.state.sidebarRightOpen !== state.isOpen) {
      this.setState({
        sidebarRightOpen: state.isOpen,
      });
    }
  }


  onStateChangeLeftSidebar = (state) => {
    if (this.state.sidebarLeftOpen !== state.isOpen) {
      this.setState({
        sidebarLeftOpen: state.isOpen,
      });
    }
  }


  toggleRightSidebar = () => {
    this.setState({
      sidebarRightOpen: !this.state.sidebarRightOpen,
    });
  }


  toggleLeftSidebar = () => {
    this.setState({
      sidebarLeftOpen: !this.state.sidebarLeftOpen,
    });
  }


  render() {
    const { form } = this.props;
    const ElasticMenu = BurgerMenu.elastic;
    const StackMenu = BurgerMenu.stack;

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
                isOpen={this.state.sidebarLeftOpen}
                onStateChange={this.onStateChangeLeftSidebar}
                left
              >
                <ElementsContainer/>
              </ElasticMenu>
            </div>
            <div id='inner-container'>
              <Form
                form={form}
                toggleRightSidebar={this.toggleRightSidebar}
                toggleLeftSidebar={this.toggleLeftSidebar}
              />
            </div>
            <div className='element-editor'>
              <StackMenu
                pageWrapperId={'inner-container'}
                outerContainerId={'outer-container'}
                width={350}
                id={'element-editor'}
                isOpen={this.state.sidebarRightOpen}
                onStateChange={this.onStateChangeRightSidebar}
                right
              >
                <div>
                  <ElementEditor
                    control={this.props.currentControl}
                  />
                </div>
              </StackMenu>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
