import React from "React";

import "./TableFooter.less";

export default class TableFooter extends React.Component {
  state = {
    tableUse: 38,
    tableSurplus: 20,
    tableError: 2,
  };
  render() {
    const { tableUse, tableSurplus, tableError } = this.state;
    return (
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-box">
            <div id="dining"></div>
            <span>正在用餐</span>
          </div>
          <div className="footer-left-box">
            <div id="dining-none"></div>
            <span>无人用餐</span>
          </div>
          <div className="footer-left-box">
            <div id="table-breakdown"></div>
            <span>餐桌故障</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-box">
            <span>已用：</span>
            <span className="span-blue">{tableUse}</span>
            <span>台</span>
          </div>
          <div className="footer-right-box">
            <span>剩余：</span>
            <span className="span-blue">{tableSurplus}</span>
            <span>台</span>
          </div>
          <div className="footer-right-box">
            <span>故障：</span>
            <span className="span-red">{tableError}</span>
            <span>台</span>
          </div>
        </div>
      </div>
    );
  }
}
