import { Tabs } from "antd";
import TableCard from "./component/TableCard";

import "./style.less";

const { TabPane } = Tabs;

import tableData from "./tableData";
import TableFooter from "./component/TableFooter";

const TabTitle = ({ title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      fontSize: 24,
    }}
  >
    {title}
  </div>
);

export default class Dashboard extends React.Component {
  state = {
    tabKey: "all",
  };

  onChangeTab = (tabKey) => this.setState({ tabKey });

  render() {
    const data = tableData.data.list;

    return (
      <div className="dashboard-wrap">
        <Tabs
          defaultActiveKey="all"
          activeKey={this.state.tabKey}
          onChange={this.onChangeTab}
        >
          <TabPane
            tab={<TabTitle title="全部" />}
            key="all"
            style={{ minHeight: "50vh" }}
          >
            <div className="table-content">
              {data.map((item) => (
                <TableCard data={item} />
              ))}
            </div>
            <TableFooter />
          </TabPane>

          <TabPane
            tab={<TabTitle title="一楼" />}
            key="1"
            style={{ minHeight: "50vh" }}
          >
            {data.map((item) => (
              <TableCard data={item} />
            ))}
          </TabPane>
          <TabPane
            tab={<TabTitle title="二楼" />}
            key="2"
            style={{ minHeight: "50vh" }}
          >
            {data.map((item) => (
              <TableCard data={item} />
            ))}
          </TabPane>
          <TabPane
            tab={<TabTitle title="三楼" />}
            key="3"
            style={{ minHeight: "50vh" }}
          >
            {data.map((item) => (
              <TableCard data={item} />
            ))}
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
