import React from "react";
import http from "../../utils/http";
import { Table, Button, Card, Select, Modal, Input } from "antd";
const { Option } = Select;

import "./style.less";
import maintaindata from "./maintainData";
import tittlebarPng from "../../../static/image/sub_tittlebar.png";

// const callColums = maintaindata.data.callColumns;
const areaColums = maintaindata.data.areaColumns;
const callData = maintaindata.data.callData;
// console.log(maintaindata);
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

const mConfig = [
  { title: "No" },

  {
    title: "Name",
    dataIndex: "name",
    render: (A, B, C) => {
      console.log("==============", A, B, C);
      return <Button>{B.name + B.age}</Button>;
    },
  },
  { title: "Age", dataIndex: "age" },
];
const mData = [
  { name: "mike", age: 22 },
  { name: "tom", age: 11 },
  { name: "to2323m", age: 33 },
];

class MCom extends React.PureComponent {
  render() {
    const { config, data } = this.props;
    return (
      <table>
        <tr>
          {config.map((v) => (
            <th>{v.title}</th>
          ))}
        </tr>
        {data.map((v1, i1) => (
          <tr>
            {config.map((v2, i2) => (
              <td>
                {config[i2].render
                  ? config[i2].render(v1[config[i2].dataIndex], v1, i1)
                  : v1[config[i2].dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}

export default class InfoMaintain extends React.Component {
  state = {
    //表格显示的数据默认为一楼的数据
    areaDataSource: callmakeFloorFirstData,
    pandectDataSource: callmakeFloorFirstData,
    modal: false,
    editText: "",
    curRow: 0,
    operateType: "add", // add edit]

    callingData: [],
  };

  delete = (ID) =>
    http.post("/api/v1/maintenance/delete", { ID }).then(this.refreshData);

  edit = (param) =>
    http.post("/api/v1/maintenance/update", param).then(this.refreshData);

  add = (content) =>
    http.post("/api/v1/maintenance/add", { content }).then(this.refreshData);

  refreshData = () =>
    http
      .get("/api/v1/maintenance/getCallingList")
      .then(({ data: callingData }) => this.setState({ callingData }));

  componentDidMount() {
    this.refreshData();
  }

  showModal = () => this.setState({ modal: true });
  hideModal = () => this.setState({ modal: false });

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

    const callColumns = [
      {
        title: "呼叫名称",
        dataIndex: "content",
        key: "content",
      },
      {
        title: "操作",
        key: "operate",
        // dataIndex: "operate",
        //render的第三个参数index为序号,data的作用是把record和index往后推一位置
        render: (data, record, index) => {
          console.log(data, record, index);
          return (
            <>
              <Button
                style={{ width: 90, height: 40, marginRight: 10 }}
                type="primary"
                onClick={() => {
                  this.setState({
                    editText: record.content, //设置弹出的对话框内容为当前呼叫内容的显示内容
                    curRow: index, //编辑当前为第几行
                    operateType: "edit",
                  });
                  this.showModal(); //调用该函数后为true，为true后弹出对话框
                }}
              >
                编辑
              </Button>
              <Button
                onClick={() => this.delete(record.ID)}
                style={{ width: 90, height: 40 }}
              >
                删除
              </Button>
            </>
          );
        },
      },
    ];

    return (
      <div className="infomaintain">
        {/* <MCom config={mConfig} data={mData} /> */}
        <div className="content-box">
          <div className="callCard-made">
            <div className="callCard-made-box">
              <Card title="呼叫定制">
                <div className="nav-content">
                  <span>{`您目前已定制${
                    this.state.callingData.length
                  }条呼叫操作，您还可以定制${6 -
                    this.state.callingData.length}条操作`}</span>
                  <Button
                    className="nav-content-button"
                    style={{
                      display: this.state.callingData.length >= 6 && "none",
                    }}
                    onClick={() => {
                      this.setState({
                        editText: "",
                        operateType: "add",
                      });
                      this.showModal();
                    }}
                  >
                    新增
                  </Button>
                </div>
                <div className="call-make">
                  <Table
                    // columns={callColums}
                    columns={callColumns}
                    // dataSource={callData}
                    dataSource={this.state.callingData}
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
        <Modal
          title="Basic Modal"
          visible={this.state.modal}
          onOk={() => {
            const { operateType, editText, callingData, curRow } = this.state;

            if (operateType === "add") {
              this.add(editText);
            } else {
              this.edit({
                ID: callingData[curRow].ID,
                content: editText,
              });
            }

            this.hideModal();
          }}
          onCancel={this.hideModal}
        >
          <Input
            value={this.state.editText}
            onChange={(e) => this.setState({ editText: e.target.value })}
          />
        </Modal>
      </div>
    );
  }
}
