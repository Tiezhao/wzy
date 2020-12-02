import React from "react";
import { Form, Input, Button, Modal } from "antd";

import "./style.less";
import successPng from "../../../static/image/icon_success.png";
import titlebarPng from "../../../static/image/sub_tittlebar.png";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values) => {
  //   console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
};

export default class UrgencyStart extends React.Component {
  state = {
    modalVisible: false,
  };
  showModal = () => {
    this.setState({ modalVisible: true });
  };
  handleOk = (e) => {
    // console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      modalVisible: false,
    });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <div className="urgencystart">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="author-verify">
            <img src={titlebarPng} />
            <span>授权验证</span>
          </div>
          <div className="author-content">
            <Form.Item
              label="账号授权码"
              name="userCode"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              validateStatus="validating"
              help="请输入正确的授权码！"
            >
              <Input placeholder="授权码" />
            </Form.Item>
          </div>
          <div className="author-applyFor">
            <img src={titlebarPng} />
            <span>紧急启动三天申请</span>
          </div>
          <div className="author-user">
            <Form.Item
              label="申请人"
              name="userApply"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="申请人姓名" />
            </Form.Item>
          </div>
          <div className="author-userTel">
            <Form.Item
              label="手机号"
              name="userTel"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="手机号" />
            </Form.Item>
          </div>
          <div className="author-verifyCode">
            <Form.Item
              label="验证码"
              validateStatus="validating"
              help="授权码错误"
              name="verifyCode"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="验证码" />
            </Form.Item>
          </div>
          <div className="author-getverifyCode">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                获取验证码
              </Button>
            </Form.Item>
          </div>
          <div className="author-submit">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={this.showModal}>
                确定
              </Button>
              <Modal
                title="申请结果"
                visible={modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button
                    // key="submit"
                    type="primary"
                    // loading={loading}
                    onClick={this.handleOk}
                  >
                    我知道了
                  </Button>,
                ]}
              >
                <img src={successPng} />
                <div className="ant-modal-body-conent">
                  <span className="h2-first">申请成功！</span>
                  <span className="h2-second">
                    请在三天内完成付费否则系统将无法启动！
                  </span>
                </div>
              </Modal>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}
