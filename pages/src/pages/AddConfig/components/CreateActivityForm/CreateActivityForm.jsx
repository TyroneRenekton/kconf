import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Button,
  Grid,
  Feedback
} from '@icedesign/base';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/zh-cn';
import axios from 'axios';

const { Row, Col } = Grid;
const Toast = Feedback.toast;


export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      configJson: '',
      placeholder: '',
      value: {},
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  submit = () => {
    this.formRef.validateAll((error, value) => {
      console.log('error', error, 'value', value);
      if (error) {
        return;
      }
      axios
        .post('/api/update', {
          key: value.name,
          value: this.state.configJson,
          comment: value.comment,
          password: value.password,
        })
        .then((response) => {
          if (response.data.success) {
            Toast.success("更新配置项成功！");
          } else {
            Toast.error("获取数据失败");
          }
        });
    });
  };

  onCodeChange = (t) => {
    this.setState({
      configJson: t.json,
    });
  };

  componentWillReceiveProps(prop) {
    const {ds} = prop;
    if (ds) {
      this.setState({
        value: {
          name: ds.confName,
          comment: ds.confComment,
        },
        placeholder: JSON.parse(ds.confJson),
      })
    }
  }

  render() {
    return (
      <div className="create-activity-form">
        <IceContainer title="创建新配置项" style={styles.container}>
          <IceFormBinderWrapper
            ref={(formRef) => {
              this.formRef = formRef;
            }}
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <div>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  配置名称：
                </Col>
                <Col s="18" l="16">
                  <IceFormBinder
                    name="name"
                    required
                    message="配置项名称必须填写"
                  >
                    <Input style={{ width: '100%' }}/>
                  </IceFormBinder>
                  <IceFormError name="name"/>
                </Col>
              </Row>

              <Row>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  备注：
                </Col>
                <Col s="18" l="16">
                  <IceFormBinder name="comment">
                    <Input multiple style={{ width: '100%' }}/>
                  </IceFormBinder>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  更新密码：
                </Col>
                <Col s="18" l="16">
                  <IceFormBinder name="password">
                    <Input style={{ width: '100%' }}/>
                  </IceFormBinder>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  JSON配置：
                </Col>
                <Col s="18" l="16">
                  <JSONInput
                    id='a_unique_id'
                    locale={locale}
                    height='360px'
                    width='100%'
                    onChange={this.onCodeChange.bind(this)}
                    placeholder={this.state.placeholder}
                  />
                </Col>
              </Row>

              <Row style={styles.btns}>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="18" l="16">
                  <Button type="primary" onClick={this.submit}>
                    立即创建
                  </Button>
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
