import React from "react";
import { Table, Button, Modal } from "antd";

export default class DeleteButton extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };
  handleOk = () => {
    this.setState({ visible: false });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <div style={{ display: "inline-block" }}>
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "#3bb8f8",
            width: 90,
            height: 40,
            fontSize: 20,
            borderRadius: 4,
            border: "1px solid #3bb8f8",
            marginRight: 16,
            display: "inline-block",
          }}
          onClick={this.showModal}
        >
          {this.props.data}
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
