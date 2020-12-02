import React from "react";
import { Tabs } from "antd";
import "./style.less";
import InfoCard from "./component/infoCard";
import infoData from "./infoData";
import http from "../../utils/http";

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
    systemInfoList: [],
    tabKey: "all",
  };
  componentDidMount() {
    //  const xhr = new XMLHttpRequest();
    //   xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //       console.info("======", xhr.response);
    //     }
    //  };
    //  xhr.open("get", "/api/v1/wyz/dashboard/tables.json");
    //   xhr.send();
    // const arraystoveList = [];
    http.get("/api/v1/notice/getAllNotice").then((dd) => {
      // console.log(dd.data);
      this.setState({ systemInfoList: dd.data });
    });
  }
  //不懂参数tabKey怎么获取到
  onChangeTab = (tabKey) => {
    this.setState({ tabKey: tabKey });
  };
  render() {
    // const { tabKey } = this.state;
    const { systemInfoList } = this.state;
    // console.log(systemInfoList);

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
              {systemInfoList.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="未读" />} key="2">
            <div>
              {systemInfoList.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="已读" />} key="3">
            <div>
              {systemInfoList.map((item) => (
                <InfoCard data={item} />
              ))}
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
