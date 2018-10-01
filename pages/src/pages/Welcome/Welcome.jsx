import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import AblityItems from './components/AblityItems';

export default class Welcome extends Component {
  static displayName = 'Welcome';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome-page">
        <IntroBanner />
        <AblityItems />
      </div>
    );
  }
}
