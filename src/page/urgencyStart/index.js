import React from "react";
import { Form, Input, Button } from "antd";

import "./style.less";
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
  render() {
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
              name="verifyCode"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="验证码" />
            </Form.Item>
          </div>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              获取验证码
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
