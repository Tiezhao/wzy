import React from 'react';
import dayjs from 'dayjs';
import { Table, Button, Pagination } from 'antd';
import stoveData from './stoveData';
import http from '../../utils/http';

import './style.less';

const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: '蓝牙ping码',
    dataIndex: 'blueteethPin',
    key: 'blueteethPin',
  },
  {
    title: '到期时间',
    dataIndex: 'expireTime',
    key: 'expireTime',
    render: (expireTime) => dayjs(expireTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '启用时间',
    dataIndex: 'issueTime',
    key: 'issueTime',
    render: (issueTime) => dayjs(issueTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '订单号',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '灶台编号',
    dataIndex: 'stoveNo',
    key: 'stoveNo',
  },
  {
    title: '终端编号',
    dataIndex: 'terminalCode',
    key: 'terminalCode',
  },
  {
    title: '终端名称',
    dataIndex: 'terminalName',
    key: 'terminalName',
  },
  {
    title: '剩余时间/天',
    dataIndex: 'validDays',
    key: 'validDays',
  },
];

export default class StoveMatch extends React.Component {
  state = {
    list: [],
    total: 0,

    pagination: { page: 1, pageSize: 10 },
  };
  componentDidMount() {
    const { pagination } = this.state;
    const param = { ...pagination };
    http.post('/api/v1/stove/getStoveMatchList', param).then((result) => {
      if (result.success) {
        const { list, total } = result.data;
        this.setState({ list, total });
      } else {
      }
    });
  }
  onChange = (page) => {
    this.setState(
      {
        pagination: { ...this.state.pagination, page },
      },
      () => {
        const { pagination } = this.state;
        const param = { ...pagination };
        http.post('/api/v1/stove/getStoveMatchList', param).then((result) => {
          if (result.success) {
            const { list, total } = result.data;
            this.setState({ list, total });
          } else {
          }
        });
      }
    );
  };
  render() {
    const {
      list,
      total,
      pagination: { page, pageSize },
    } = this.state;

    console.log('aslkdfjas', this.state);

    return (
      <div className="stovematch">
        <div className="stovematch-header">
          <span style={{ marginLeft: 20 }}>总租用台数：</span>
          <div className="stovematch-num">{total}</div>
          <span>台</span>
        </div>
        <div className="stovematch-content">
          <Table
            pagination={{
              total,
              pageSize,
              current: page,
              onChange: this.onChange,
            }}
            columns={columns}
            dataSource={list}
          ></Table>
          <div className="content-pages">
            <span>共</span>
            {Math.ceil(total / pageSize)}
            <span>页记录，当前显示第</span>
            {page}
            <span>页</span>
          </div>
          <Button
            className="conent-updata"
            onClick={() => {
              http
                .post('/api/v1/stove/getStoveMatchList', {
                  ...this.state.pagination,
                })
                .then((result) => {
                  if (result.success) {
                    const { list, total } = result.data;
                    this.setState({ list, total });
                  }
                });
            }}
          >
            刷新
          </Button>
          <Button
            className="content-shouye"
            onClick={() => {
              this.setState(
                {
                  pagination: { ...this.state.pagination, page: 1 },
                },
                () => {
                  http
                    .post('/api/v1/stove/getStoveMatchList', {
                      ...this.state.pagination,
                    })
                    .then((result) => {
                      if (result.success) {
                        const { list, total } = result.data;
                        this.setState({ list, total });
                      }
                    });
                }
              );
            }}
          >
            首页
          </Button>
        </div>
      </div>
    );
  }
}
