import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Header from 'components/Header';
import 'styles/main.scss';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }
  render() {
    return (
      <DocumentTitle title="Form Constructor">
        <div className="form-constructor-page">
          <Header />
          <div className="content">
            Hello world
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
