import React from "react";
import { Form, Input, Button, Modal, message } from "antd";

import "./style.less";
import successPng from "../../../static/image/icon_success.png";
import titlebarPng from "../../../static/image/sub_tittlebar.png";
import http from "../../utils/http";

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
    countDown: 0, //等待倒计时
    codeLoading: false,
    submitLoading: false,
    authCodeHelpMsg: "", // 请输入正确的授权码！
    smsCodeHelpMsg: "", // 验证码错误

    authCode: "",
    applicant: "",
    phoneNo: "",
    verificationCode: "",
  };

  componentDidMount() {
    // console.log("更新状态");
    this.timerID = setInterval(() => {
      // console.log('countDown:', this.state.countDown);
      if (this.state.countDown > 0) {
        this.setState({ countDown: this.state.countDown - 1 });
      }
    }, 1000);
  }
  //组件将要卸载时
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

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
              // 错误提示信息
              help={this.state.authCodeHelpMsg}
            >
              <Input
                value={this.state.authCode}
                onChange={(e) => {
                  this.setState({
                    authCode: e.target.value, //e.target.valuew为input输入的内容
                    authCodeHelpMsg: "",
                  });
                }}
                placeholder="授权码"
              />
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
              <Input
                value={this.state.applicant}
                onChange={(e) => {
                  // console.log(e.target);
                  this.setState({ applicant: e.target.value });
                }}
                placeholder="申请人姓名"
              />
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
              <Input
                value={this.state.phoneNo}
                onChange={(e) => {
                  this.setState({ phoneNo: e.target.value });
                }}
                placeholder="手机号"
              />
            </Form.Item>
          </div>
          <div className="author-verifyCode">
            <Form.Item
              label="验证码"
              validateStatus="validating"
              // 错误提示信息
              help={this.state.smsCodeHelpMsg}
              name="verifyCode"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                value={this.state.verificationCode}
                onChange={(e) => {
                  this.setState({
                    verificationCode: e.target.value,
                    smsCodeHelpMsg: "",
                  });
                }}
                placeholder="验证码"
              />
            </Form.Item>
          </div>
          <div className="author-getverifyCode">
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ codeLoading: true });
                  http.get("/api/v1/emergency/sendSmsCode").then((res) => {
                    this.setState({ codeLoading: false });
                    if (res.success) {
                      this.setState({ countDown: 60 });
                    } else {
                      message.error(res.message); //error返回报错
                    }
                  });
                }}
                loading={this.state.codeLoading}
                disabled={this.state.countDown > 0}
              >
                {this.state.countDown > 0
                  ? `${this.state.countDown}s`
                  : `获取验证码`}
              </Button>
            </Form.Item>
          </div>
          <div className="author-submit">
            <Form.Item {...tailLayout}>
              <Button
                disabled={
                  !this.state.authCode ||
                  !this.state.applicant ||
                  !this.state.phoneNo ||
                  !this.state.verificationCode
                }
                type="primary"
                loading={this.state.submitLoading}
                onClick={() => {
                  const {
                    authCode,
                    applicant,
                    phoneNo,
                    verificationCode,
                  } = this.state;

                  this.setState({ submitLoading: true });
                  http
                    .post("/api/v1/emergency/apply", {
                      authCode,
                      applicant,
                      phoneNo,
                      verificationCode,
                    })
                    .then((res) => {
                      // console.log(res.message);
                      this.setState({ submitLoading: false });
                      if (res.success) {
                        this.showModal();
                      } else {
                        if (res.code === "000004") {
                          this.setState({ authCodeHelpMsg: res.message });
                        } else if (res.code === "000005") {
                          this.setState({ smsCodeHelpMsg: res.message });
                        } else {
                          message.error(res.message); //显示结果为 授权码错误
                        }
                      }
                    });
                }}
              >
                确定
              </Button>
              <Modal
                title="申请结果"
                visible={modalVisible} //该对话框是否可见，一开始为false不可见，当点击确定按钮时接受到回调时会调用showmodal函数从而改变modalVisible的值
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button type="primary" onClick={this.handleOk}>
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
