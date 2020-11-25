import React from "react";
import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { Link } from "react-router-dom";

import Exit from "../page/exit";
import HomePageFooter from "../page/homePageFooter";
import OtherFooter from "../page/otherFooter";
import "./style.less";
import QRCode from "../../icons/二维码.png";
import systemLogo from "../../static/image/无烟灶管理.png";

const NavItem = ({ path, iconType, name }) => {
  return (
    <Menu.Item key={path}>
      <Link to={path}>
        <Icon type={iconType} />
        <span className="nav-text">{name}</span>
      </Link>
    </Menu.Item>
  );
};

const navList = [
  {
    path: "/app/dashboard",
    icon: require("../../static/image/icon_home.png"),
    name: "",
  },
  {
    path: "/app/b",
    icon: require("../../static/image/icon_stovematch.png"),
    name: "灶台匹配",
  },
  {
    path: "/app/c",
    icon: require("../../static/image/icon_inform.png"),
    name: "系统通知",
  },
  {
    path: "/app/d",
    icon: require("../../static/image/icon_emerge.png"),
    name: "紧急启用",
  },
  {
    path: "/app/e",
    icon: require("../../static/image/icon_maintenance.png"),
    name: "信息维护",
  },
];

export default class AppLayout extends React.Component {
  state = {
    //footer初始化时为0，当点击主业时变为1，点击其他时变为2
    footer: 0,
  };
  render() {
    const { footer } = this.state;
    return (
      <Layout className="app-layout">
        <Sider className="app-sider">
          <div className="app-systemLogo">
            <img src={systemLogo} />
          </div>
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
                  {/* {path === "/app/dashboard"
                    ? this.setState({ footer: 1 })
                    : this.setState({ footer: 2 })} */}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <div className="app-QRCode">
            <img src={QRCode} />
            <span>热线：023-1234 5678</span>
          </div>
        </Sider>
        <Layout>
          <Content className="app-content">
            <Exit />
            <div>{this.props.children}</div>
            <div>{footer === 1 ? <HomePageFooter /> : <OtherFooter />}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}