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
  // console.log(props.data.arrayContent);
  const {
    systemInfo,
    contentTitle,
    mainContent,
    signContent,
    backgroundColor,
  } = props.data;

  let index = false;
  if (backgroundColor === "#3fb8f8") {
    index = false;
  }
  if (backgroundColor === "#cecece") {
    index = true;
  }
  return (
    <div className="infocard">
      <div className="infocard-box">
        <div
          className="infocard-nav"
          style={{ backgroundColor: backgroundColor }}
        >
          {systemInfo}
        </div>
        <div className="infocard-content">
          <h3>{contentTitle}</h3>
          <h3>{mainContent}</h3>
        </div>
        <Button className="infocard-button" type="primary" disabled={index}>
          {signContent}
        </Button>
      </div>
    </div>
  );
}
