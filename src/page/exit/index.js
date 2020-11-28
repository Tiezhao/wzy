import React from "react";

import "./style.less";

import exitPng from "../../../static/image/icon_eixt.png";

export default class Exit extends React.Component {
  render() {
    return (
      <div className="nav-exit">
        <div className="nav-exit-box">
          <img className="exit-logo" src={exitPng} />
        </div>
      </div>
    );
  }
}
