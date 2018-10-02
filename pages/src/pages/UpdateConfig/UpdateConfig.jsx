import React, { Component } from 'react';
import CreateActivityForm from '../AddConfig/components/CreateActivityForm/CreateActivityForm';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Feedback,
} from '@icedesign/base';

const Toast = Feedback.toast;

@withRouter
export default class UpdateConfig extends Component {
  static displayName = 'AddConfig';

  constructor(props) {
    super(props);
    this.state = {
      ds: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps() {
    this.getData();
  }

  getData() {
    const configId = this.props.match.params.configId;
    const thiz = this;
    axios
      .get('/api/queryDetail', {
        params: {
          key: configId,
        },
      })
      .then((response) => {
        if (response.data.success) {
          thiz.setState({
            ds: response.data.data,
          });
        } else {
          Toast.error('获取数据失败');
        }
      });
  }

  render() {
    return (
      <div className="add-config-page">
        <CreateActivityForm ds={this.state.ds}/>
      </div>
    );
  }
}
