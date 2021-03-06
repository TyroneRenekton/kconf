import React, { Component } from 'react';

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/aWimbMGxabytxrRqcnEU.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>能力输出</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            赋能支付、实名、信用、理财、大数据开发
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/neNAdNbBxUbWpbUQIsJA.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>技术强劲</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            React + SpringBoot 赋能，系统稳如磐石
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/SsStefBxcUWayMyktAwz.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>开放开源</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            人人可用，人认可修改，人人可部署
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    textAlign: 'center',
    background: '#fff',
    padding: '40px 0',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '360px',
    margin: '35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '21px',
  },
};
