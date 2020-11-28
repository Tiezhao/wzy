import React from "react";
import { Tabs } from "antd";
import "./style.less";

const { TabPane } = Tabs;
//又分不清什么时候用圆括号什么时候用大括号
const SystemInfoTabTitle = ({ title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // padding: 32,
      // fontSize: 24,
    }}
  >
    {title}
  </div>
);

export default class SystemInfo extends React.Component {
  state = {
    tabKey: "all",
  };
  onChangeTab = (tabKey) => {
    this.setState({ tabKey: tabKey });
  };
  render() {
    const { tabKey } = this.state;
    return (
      <div className="systeminfo">
        <Tabs
          defaultActiveKey={tabKey}
          activeKey={tabKey}
          onChange={this.onChangeTab}
        >
          <TabPane
            tab={<SystemInfoTabTitle title="全部" />}
            key="all"
            style={{ minHeight: "50vh" }}
          >
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="未读" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="已读" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
