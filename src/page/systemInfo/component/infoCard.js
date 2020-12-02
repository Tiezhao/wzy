import React from "react";
import { Button } from "antd";

import "./infoCard.less";

//0为已读，1为未读，默认为1未读
const infoCardColor = {
  0: "#cecece",
  1: "#3fb8f8",
};

const getInfoCardColor = (infoCardStatus) => infoCardColor[infoCardStatus];

//再尝试自定义组件
export default function InfoCard(props) {
  // console.log(props.data.C);
  const { ID, content, isRead } = props.data;
  // console.log(props.data);

  let backgroundColor = "#3fb8f8";
  let index = false;
  if (isRead === false) {
    backgroundColor = "#3fb8f8";
    index = false;
  }
  if (isRead === true) {
    backgroundColor = "#cecece";
    index = true;
  }
  return (
    <div className="infocard">
      <div className="infocard-box">
        <div
          className="infocard-nav"
          style={{ backgroundColor: backgroundColor }}
        >
          系统消息
        </div>
        <div className="infocard-content">
          <h3>{content[0]}</h3>
          <h3>{content[1]}</h3>
        </div>
        <Button className="infocard-button" type="primary" disabled={index}>
          标记已读
        </Button>
      </div>
    </div>
  );
}
