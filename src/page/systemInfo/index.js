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
    http.get("/api/v1/notice/getAllNotice").then((result) => {
      this.setState({ systemInfoList: result.data });
    });
  }

  markRead = (noticeID) => {
    const { systemInfoList } = this.state;
    systemInfoList.forEach((value) => {
      if (value.ID === noticeID) {
        value.isRead = true;
      }
    });

    this.setState({
      systemInfoList: [...systemInfoList],
    });
  };

  render() {
    const { systemInfoList } = this.state;

    return (
      <div className="systeminfo">
        <Tabs
          style={{ height: "100%", padding: 24 }}
          defaultActiveKey="all"
          activeKey={this.state.tabKey}
          onChange={(tabKey) => this.setState({ tabKey })}
        >
          <TabPane tab={<SystemInfoTabTitle title="全部" />} key="all">
            <div>
              {systemInfoList.map((item) => (
                <InfoCard data={item} markRead={this.markRead} />
              ))}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="未读" />} key="2">
            <div>
              {systemInfoList.map((item) =>
                item.isRead ? null : (
                  <InfoCard data={item} markRead={this.markRead} />
                )
              )}
            </div>
          </TabPane>
          <TabPane tab={<SystemInfoTabTitle title="已读" />} key="3">
            <div>
              {systemInfoList.map((item) =>
                item.isRead ? <InfoCard data={item} /> : null
              )}
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
