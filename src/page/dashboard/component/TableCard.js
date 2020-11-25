import { Button } from "antd";
import "./TableCard.less";

import { addID4ArrItem } from "../../../utils/addID4ArrItem.js";

const arr = [{}, {}, {}];
// arr.length 3
// arr.log = []
arr.forEach(addID4ArrItem);

// 0: close, 1: on, 2: error
const icons = {
  stove: {
    0: require("../../../../static/image/icon_stove_nouse.png"),
    1: require("../../../../static/image/icon_stove.png"),
    2: require("../../../../static/image/icon_stove_problem.png"),
  },

  fan: {
    0: require("../../../../static/image/icon_windpower_nouse.png"),
    1: require("../../../../static/image/icon_windpower.png"),
    2: require("../../../../static/image/icon_windpower_problem.png"),
  },
  cooler: {
    0: require("../../../../static/image/icon_cooling_nouse.png"),
    1: require("../../../../static/image/icon_cooling.png"),
    2: require("../../../../static/image/icon_cooling_problem.png"),
  },
};

// 0: off, 1: on, 2: error
const tableColor = {
  0: "#cecece",
  1: "#3fb8f8",
  2: "#ef4748",
};
const getColorByStatus = (status) => tableColor[status] || tableColor[0];

const FlexVerticalCenter = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
);

export default function TableCard(props) {
  const { tableName, tableStatus, callingContent, status } = props.data;

  return (
    <div
      className="cpnt-table-card"
      style={{
        border: `solid 1px ${getColorByStatus(tableStatus)}`,
        boxShadow: `2px 2px 10px -2px ${getColorByStatus(tableStatus)}`,
      }}
    >
      <div
        className="t-name"
        style={{
          background: getColorByStatus(tableStatus),
        }}
      >
        {tableName}
      </div>
      <div className="t-main">
        <div className="t-content">
          <FlexVerticalCenter>
            <div className="t-dot" />
            <div className="t-call">呼叫内容</div>
          </FlexVerticalCenter>
          <div className="t-call-list">
            {callingContent.map(({ id, name, time }) => (
              <div
                key={id}
                className="t-call-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{name}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="t-status">
          <div className="t-status-list">
            <img className="t-status-icon" src={icons.stove[status.stove]} />
            <img className="t-status-icon" src={icons.fan[status.fan]} />
            <img className="t-status-icon" src={icons.cooler[status.cooler]} />
          </div>
          <Button type="primary" disabled={!callingContent.length}>
            处理
          </Button>
        </div>
      </div>
    </div>
  );
}
