import React from "react";
import { Table, Button, Card, Select } from "antd";
const { Option } = Select;

import "./style.less";
import maintaindata from "./maintainData";
import tittlebarPng from "../../../static/image/sub_tittlebar.png";

const callColums = maintaindata.data.callColumns;
const areaColums = maintaindata.data.areaColumns;
const callData = maintaindata.data.callData;
const areaData = maintaindata.data.areaData;

const callmakeFllorFirstColumns = [
  {
    title: "餐桌号",
    dataIndex: "tableindex",
  },
  {
    title: "型号",
    dataIndex: "type",
  },
  {
    title: "所属区域",
    dataIndex: "areabelog",
  },
];

const areaFloorData = ["一楼", "二楼"];
const tableFloorData = ["全部", "未分配", "一楼", "二楼"];

const callmakeFloorData = [];
const pandectFloorData = [];

const callmakeFloorFirstData = [];
for (let i = 0; i < 10; i++) {
  callmakeFloorFirstData.push({
    key: i,
    tableindex: "餐桌一",
    type: "四人桌",
    areabelog: "一楼",
  });
}
callmakeFloorData.push(callmakeFloorFirstData);
pandectFloorData.push(callmakeFloorFirstData);

const callmakeFloorSecondData = [];
for (let i = 0; i < 8; i++) {
  callmakeFloorSecondData.push({
    key: i,
    tableindex: "餐桌二",
    type: "四人桌",
    areabelog: "二楼",
  });
}
callmakeFloorData.push(callmakeFloorSecondData);
pandectFloorData.push(callmakeFloorSecondData);

export default class InfoMaintain extends React.Component {
  state = {
    //表格显示的数据默认为一楼的数据
    areaDataSource: callmakeFloorFirstData,
    pandectDataSource: callmakeFloorFirstData,
  };
  onChangeFloorData = (value) => {
    if (value === "一楼") {
      this.setState({ areaDataSource: callmakeFloorData[0] });
    } else {
      this.setState({ areaDataSource: callmakeFloorData[1] });
    }
  };
  onChangePandectData = (value) => {
    if (value === "一楼") {
      this.setState({ pandectDataSource: callmakeFloorData[0] });
    } else {
      this.setState({ pandectDataSource: callmakeFloorData[1] });
    }
  };
  render() {
    const { areaDataSource, pandectDataSource } = this.state;
    const rowSelection = {
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div className="infomaintain">
        <div className="content-box">
          <div className="callCard-made">
            <div className="callCard-made-box">
              <Card title="呼叫定制">
                <div className="nav-content">
                  <span>您目前已定制2条呼叫操作，您还可以定制4条操作</span>
                  <Button className="nav-content-button">新增</Button>
                </div>
                <div className="call-make">
                  <Table
                    columns={callColums}
                    dataSource={callData}
                    pagination={{ hideOnSinglePage: true }}
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="areaCard-made">
            <div className="areaCard-made-box">
              <Card title="区域定制">
                <div className="nav-content">
                  <Button className="nav-content-button">新增</Button>
                </div>
                <div className="call-make">
                  <Table
                    columns={areaColums}
                    dataSource={areaData}
                    pagination={{ hideOnSinglePage: true }}
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="areaCard-edit">
            <Card title="区域编辑">
              <div className="content-left">
                <div className="area-table">
                  <img src={tittlebarPng} />
                  <span>区域餐桌</span>
                </div>
                <div className="area-belong">
                  <span>所属区域</span>
                  <Select
                    placeholder="未分配"
                    style={{ width: 150 }}
                    onChange={this.onChangeFloorData}
                  >
                    {areaFloorData.map((floor) => (
                      <Option
                        key={floor}
                        style={{ color: "#333333", fontSize: 18 }}
                      >
                        {floor}
                      </Option>
                    ))}
                  </Select>
                  <Button className="button-delete">删除</Button>
                </div>
                <div className="call-make">
                  <Table
                    rowSelection={rowSelection}
                    columns={callmakeFllorFirstColumns}
                    dataSource={areaDataSource}
                    pagination={{ pageSize: 3 }}
                  />
                </div>
              </div>
              <div className="content-right">
                <div className="pandect-table">
                  <img src={tittlebarPng} />
                  <span>餐桌总览</span>
                </div>
                <div className="table-props">
                  <span>所属区域</span>
                  <Select
                    placeholder="未分配"
                    style={{ width: 150 }}
                    onChange={this.onChangePandectData}
                  >
                    {tableFloorData.map((floor) => (
                      <Option
                        key={floor}
                        style={{ color: "#333333", fontSize: 18 }}
                      >
                        {floor}
                      </Option>
                    ))}
                  </Select>
                  <Button className="button-allocate">分配</Button>
                </div>
                <div className="call-make">
                  <Table
                    rowSelection={rowSelection}
                    columns={callmakeFllorFirstColumns}
                    dataSource={pandectDataSource}
                    pagination={{ pageSize: 3 }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
