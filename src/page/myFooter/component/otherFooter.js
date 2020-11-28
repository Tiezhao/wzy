import React from "react";

import "./otherFooter.less";
import guangboPng from "../../../../static/image/icon_guangbo.png";

export default class OtherFooter extends React.Component {
  render() {
    return (
      <div className="other-footer">
        <div className="footer-alarm">
          <img src={guangboPng} />
        </div>
        <div className="footer-handle">
          <div className="handle-content">您当前还未处理的呼叫套餐有：</div>
          <div className="handle-num">
            <span>1号</span>
            <span>2号</span>
            <span>15号</span>
            <span>25号</span>
            <span>26号</span>
          </div>
        </div>
      </div>
    );
  }
}
