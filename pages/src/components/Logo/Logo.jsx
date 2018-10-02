import React, { PureComponent } from 'react';
import { Icon } from '@icedesign/base';

const LIGHT = require('./images/lightLogo.png');
const DARK = require('./images/darkLogo.png');

export default class Logo extends PureComponent {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div className="logo" style={this.props.style}>
        {/*<img src={logo} alt="" width="114" />*/}

        <h2 style={{color: 'white', margin: '0 0'}}>
          <Icon type="similar-product" size="large" /> &nbsp;统一配置中心
        </h2>
      </div>
    );
  }
}
