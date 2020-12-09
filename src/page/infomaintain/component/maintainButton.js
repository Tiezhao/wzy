import React from "react";
import { Table, Button, Modal, Input } from "antd";
import "./maintainButton.less";
import AAA from "../maintainData";

// console.log("AAA:", AAA);
// console.log(callData[0].callcontent);
// const areaData = maintaindata.data.areaData;

export default class MaintainButton extends React.Component {
  state = {
    visible: false,
    editValue: "",
  };

  showModal = () => {
    this.setState({ visible: true });
  };
  handleOk = () => {
    this.setState({ visible: false });
  };
  handleCancel = () => {
    this.setState({ visible: false, editValue: "" });
  };
  render() {
    const { visible } = this.state;
    return (
      <div style={{ display: "inline-block" }}>
        <Button
          style={{
            backgroundColor: "#3bb8f8",
            color: "#ffffff",
            width: 90,
            height: 40,
            fontSize: 20,
            borderRadius: 4,
            border: "1px solid #3bb8f8",
            marginRight: 16,
          }}
          onClick={this.showModal}
        >
          {this.props.data}
        </Button>
        {/* <div style={{ position: "relative" }}> */}
        <Modal
          title="修改呼叫内容"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="取消"
        >
          <Input
            placeholder={this.props.data}
            value={this.state.editValue}
            onChange={(e) => {
              // console.log(e.target.value);
              this.setState({ editValue: e.target.value });
            }}
          />
        </Modal>
      </div>
    );
  }
}
