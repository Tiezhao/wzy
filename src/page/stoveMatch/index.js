import React from "react";
import { Button, Pagination } from "antd";
import "./style.less";
import { Table, Tag, Space } from "antd";

import stoveData from "./stoveData";
import tableData from "../dashboard/tableData";

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "灶台编号",
    dataIndex: "stoveNum",
    key: "stoveNum",
  },
  {
    title: "蓝牙ping码",
    dataIndex: "bluePing",
    key: "bluePing",
  },
  {
    title: "终端编号",
    dataIndex: "terminalIndex",
    key: "terminalIndex",
  },
  {
    title: "终端名称",
    dataIndex: "terminalName",
    key: "terminalName",
  },
  {
    title: "启用时间",
    dataIndex: "StartTime",
    key: "StartTime",
  },
  {
    title: "到期时间",
    dataIndex: "outdateTime",
    key: "outdateTime",
  },
  {
    title: "剩余时间/天",
    dataIndex: "surplusTime",
    key: "surplusTime",
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "订单号",
    dataIndex: "orderNum",
    key: "orderNum",
  },
];

export default class StoveMatch extends React.Component {
  state = {
    tableNum: 50,
    nowPage: 1,
    totalPages: 5,
  };
  onChange = (page) => {
    this.setState({ nowPage: page });
  };
  render() {
    const { tableNum, nowPage, totalPages } = this.state;
    const data = stoveData.data.list;
    return (
      <div className="stovematch">
        <div className="stovematch-header">
          <span style={{ marginLeft: 20 }}>总租用台数：</span>
          <div className="stovematch-num">{tableNum}</div>
          <span>台</span>
        </div>
        <div className="stovematch-content">
          <Table columns={columns} dataSource={data}>
            <Pagination onChange={this.onChange} />
            {/* {console.log(current)} */}
          </Table>
          <div className="content-pages">
            <span>共</span>
            {totalPages}
            <span>页记录，当前显示第</span>
            {nowPage}
            <span>页</span>
          </div>
          <Button className="conent-updata">刷新</Button>
          <Button className="content-shouye">首页</Button>
        </div>
      </div>
    );
  }
}
