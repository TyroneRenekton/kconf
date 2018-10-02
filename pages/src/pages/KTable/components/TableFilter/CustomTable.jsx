import React, { Component } from 'react';
import { Table, Pagination, Balloon, Icon,Feedback } from '@icedesign/base';
import axios from 'axios';
import KunUtils from '../../../../util/KunUtils';

const Toast = Feedback.toast;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      dataSource: [],
    };
    this.getData(1)
  }

  getData = (page) => {
    axios
      .post('/api/queryAll', {
        curPage: page,
      })
      .then((response) => {
        if (response.data.success) {
          this.setState({
            dataSource: response.data.data.data,
            pageSize: response.data.data.pageSize,
            total: response.data.data.total,
          });
          return response.data.data;
        } else {
          Toast.error("获取数据失败");
        }
      });
  };

  handlePagination = (current) => {
    this.setState({
      current: current,
    });
    this.getData(current);
  };

  renderCatrgory = (value) => {
    return (
      <Balloon
        align="lt"
        trigger={<div style={{ margin: '5px' }}>{KunUtils.beautySub(value, 26)}</div>}
        closable={false}
        style={{ lineHeight: '24px' }}
      >
        {value}
      </Balloon>
    );
  };

  renderOper = (a, b, c) => {
    return (
      <div style={styles.oper}>
        <Icon type="edit" size="small" style={styles.editIcon}/>
      </div>
    );
  };

  renderTime = (value) => {
    return (
      <div>
        { value.substr(0, 10) + " " + value.substr(11, 8) }
      </div>
    );
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column title="序列号" dataIndex="id" align="center" width={100}/>
          <Table.Column title="名称Code" dataIndex="confName" width={160} />
          <Table.Column title="配置概览" dataIndex="confJson" cell={this.renderCatrgory} />
          <Table.Column title="备注" dataIndex="confComment" cell={this.renderCatrgory} />
          <Table.Column title="创建日期" dataIndex="gmtCreate" cell={this.renderTime}/>
          <Table.Column title="修改日期" dataIndex="gmtModify" cell={this.renderTime}/>
          <Table.Column title="操作" cell={this.renderOper} width={70}/>
        </Table>
        <Pagination
          pageSize={this.state.pageSize}
          total={this.state.total}
          style={styles.pagination}
          current={this.state.current}
          onChange={this.handlePagination}
        />
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
