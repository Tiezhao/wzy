import React from "react";
import { Tabs } from "antd";
import "./style.less";
import InfoCard from "./component/infoCard";
import infoData from "./infoData";

const { TabPane } = Tabs;
//又分不清什么时候用圆括号什么时候用大括号
const SystemInfoTabTitle = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        fontSize: 24,
      }}
    >
      {title}
    </div>
  );
};

export default class SystemInfo extends React.Component {
  state = {
    tabKey: "all",
  };
  //不懂参数tabKey怎么获取到
  onChangeTab = (tabKey) => {
    this.setState({ tabKey: tabKey });
  };
  render() {
    // const { tabKey } = this.state;

    const arrayContentData = infoData.data.arrayContent;
    const arrayReadData = infoData.data.arrayRead;
    const arrayNoReadData = infoData.data.arrayNoRead;
    return (
      <div className="systeminfo">
        <Tabs
          defaultActiveKey="all"
          activeKey={this.state.tabKey}
          onChange={this.onChangeTab}
        >
          <TabPane tab={<SystemInfoTabTitle title="全部" />} key="all">
            <div>
              {arrayContentData.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="未读" />} key="2">
            <div>
              {arrayNoReadData.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="已读" />} key="3">
            <div>
              {arrayReadData.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
