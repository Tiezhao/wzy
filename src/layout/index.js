import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { Link } from "react-router-dom";

import "./style.less";

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
    path: "/app/a",
    icon: "../../static/image/icon_home.png",
    name: "主页",
  },
  {
    path: "/app/b",
    icon: "../../static/image/icon_home.png",
    name: "灶台匹配",
  },
  {
    path: "/app/c",
    icon: "../../static/image/icon_home.png",
    name: "系统通知",
  },
];

export default class AppLayout extends React.Component {
  render() {
    return (
      <Layout className="app-layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            {navList.map(({ path, icon, name }) => (
              <Menu.Item key={path}>
                <Link to={path}>
                  <div className="nav-wrap">
                    <img
                      className="nav-img"
                      src={require("../../static/image/icon_home.png")}
                    />
                    <span className="nav-text">{name}</span>
                  </div>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div style={{ background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
