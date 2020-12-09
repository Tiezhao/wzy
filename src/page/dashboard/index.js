import { Tabs } from "antd";
import TableCard from "./component/TableCard";
import Footer from "../myFooter/index";
import { connect } from "dva";

import "./style.less";

const { TabPane } = Tabs;

import tableData from "./tableData";
import http from "../../utils/http";

const TabTitle = ({ title }) => (
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
//刷新本页面时设置的不切换的功能
// sessionStorage.setItem();

const mapStateToProps = (state) => {
  const { dashboard } = state;
  return { ...dashboard };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    updateTableList: (data) =>
      dispatch({ type: `dashboard/updateTableList`, payload: data }),
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Dashboard extends React.Component {
  state = {
    tabKey: "all",
  };

  componentDidMount() {
    const action = {
      type: "dashboard/getTableData",
      data: {
        name: "mike",
      },
    };
    this.props.dispatch(action);
  }

  render() {
    const { tableList } = this.props;

    return (
      <div className="dashboard-wrap">
        <Tabs
          defaultActiveKey="all"
          activeKey={this.state.tabKey}
          onChange={(tabKey) => this.setState({ tabKey })}
        >
          {Object.keys(tableList).map((key) => (
            <TabPane
              tab={<TabTitle title={tableList[key].floorName} />}
              key={tableList[key].floorID}
              style={{ minHeight: "50vh" }}
            >
              <div className="table-content">
                {tableList[key].tableList.map((table) => (
                  <TableCard data={table} /> //在外部给tablecard传data（props）
                ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
        <Footer />
      </div>
    );
  }
}
