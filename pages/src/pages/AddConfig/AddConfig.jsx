import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class AddConfig extends Component {
  static displayName = 'AddConfig';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-config-page">
        <CreateActivityForm />
      </div>
    );
  }
}
