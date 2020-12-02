import React from "react";
import { Button, Pagination } from "antd";
import "./style.less";
import { Table, Tag, Space } from "antd";

import stoveData from "./stoveData";
import tableData from "../dashboard/tableData";
import http from "../../utils/http";

const columns = [
  {
    title: "蓝牙ping码",
    dataIndex: "blueteethPin",
    key: "blueteethPin",
  },
  {
    title: "到期时间",
    dataIndex: "expireTime",
    key: "expireTime",
  },
  {
    title: "启用时间",
    dataIndex: "issueTime",
    key: "issueTime",
  },
  {
    title: "订单号",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "序号",
    dataIndex: "sn",
    key: "sn",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "灶台编号",
    dataIndex: "stoveNo",
    key: "stoveNo",
  },
  {
    title: "终端编号",
    dataIndex: "terminalCode",
    key: "terminalCode",
  },
  {
    title: "终端名称",
    dataIndex: "terminalName",
    key: "terminalName",
  },
  {
    title: "剩余时间/天",
    dataIndex: "validDays",
    key: "validDays",
  },
];

export default class StoveMatch extends React.Component {
  state = {
    stoveList: [],
    tableNum: 50,
    nowPage: 1,
    totalPages: 5,
  };
  componentDidMount() {
    //  const xhr = new XMLHttpRequest();
    //   xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //       console.info("======", xhr.response);
    //     }
    //  };
    //  xhr.open("get", "/api/v1/wyz/dashboard/tables.json");
    //   xhr.send();
    // const arraystoveList = [];
    http.post("/api/v1/stove/getStoveMatchList").then((dd) => {
      // console.log(dd.data.list);
      this.setState({ stoveList: dd.data.list });
    });
  }
  onChange = (page) => {
    this.setState({ nowPage: page });
  };
  render() {
    const { stoveList, tableNum, nowPage, totalPages } = this.state;
    const data = stoveData.data.list;
    return (
      <div className="stovematch">
        <div className="stovematch-header">
          <span style={{ marginLeft: 20 }}>总租用台数：</span>
          <div className="stovematch-num">{tableNum}</div>
          <span>台</span>
        </div>
        <div className="stovematch-content">
          <Table columns={columns} dataSource={stoveList}>
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
