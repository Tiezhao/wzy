import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Exit from "../page/exit/index";
import "./style.less";
import QRCode from "../../static/image/QRCode.gif";
import systemLogo from "../../static/image/无烟灶管理.png";

const { Content, Sider } = Layout;

const navList = [
  {
    path: "/app/dashboard",
    icon: require("../../static/image/icon_home.png"),
    name: "",
  },
  {
    path: "/app/stovematch",
    icon: require("../../static/image/icon_stovematch.png"),
    name: "灶台匹配",
  },
  {
    path: "/app/systemInfo",
    icon: require("../../static/image/icon_inform.png"),
    name: "系统通知",
  },
  {
    path: "/app/urgencystart",
    icon: require("../../static/image/icon_emerge.png"),
    name: "紧急启用",
  },
  {
    path: "/app/infomaintain",
    icon: require("../../static/image/icon_maintenance.png"),
    name: "信息维护",
  },
];

export default class AppLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <div className="app-systemLogo" style={{ flexShrink: 0 }}>
              <img src={systemLogo} />
            </div>
            <div style={{ flexGrow: 1, overflowY: "auto" }}>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                {navList.map(({ path, icon, name }) => (
                  <Menu.Item key={path}>
                    <Link to={path} style={{ width: 250 }}>
                      <img src={icon} />
                      {path === "/app/dashboard" ? (
                        <div className="nav-zhuye">
                          <span
                            className="nav-zhuye-zhu"
                            style={{ display: "inline-block" }}
                          >
                            主
                          </span>
                          <span style={{ display: "inline-block" }}>页</span>
                        </div>
                      ) : (
                        <span className="nav-text">{name}</span>
                      )}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
              <div className="app-QRCode">
                <img src={QRCode} />
                <span>热线：023-1234 5678</span>
              </div>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content className="app-content">
            <div style={{ height: "100vh", position: "relative" }}>
              <Exit />
              <div style={{ height: "100%", overflowY: "auto" }}>
                {this.props.children}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
