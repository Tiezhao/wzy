import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { Link } from "react-router-dom";

import "./style.less";
import QRCode from "../../icons/二维码.png";
import systemLogo from "../../static/image/无烟灶管理.png";
import homePng from "../../static/image/icon_home.png";
import stovematchPng from "../../static/image/icon_stovematch.png";
import informPng from "../../static/image/icon_inform.png";
import emergePng from "../../static/image/icon_emerge.png";
import maintenancePng from "../../static/image/icon_maintenance.png";

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
    icon: homePng,
    name: "",
  },
  {
    path: "/app/b",
    icon: stovematchPng,
    name: "灶台匹配",
  },
  {
    path: "/app/c",
    icon: informPng,
    name: "系统通知",
  },
  {
    path: "/app/d",
    icon: emergePng,
    name: "紧急启用",
  },
  {
    path: "/app/e",
    icon: maintenancePng,
    name: "信息维护",
  },
];

export default class AppLayout extends React.Component {
  render() {
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
            <div>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
