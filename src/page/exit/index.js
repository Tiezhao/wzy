import React from 'react';
import { Modal, Button } from 'antd';

const { confirm } = Modal;
import './style.less';

import exitPng from '../../../static/image/icon_eixt.png';

export default class Exit extends React.Component {
  render() {
    return (
      <div
        className="nav-exit"
        onClick={() => {
          confirm({
            title: '注销',
            content: '确认退出系统?',
            okText: '确认',
            cancelText: '取消',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
        }}
      >
        <div className="nav-exit-box">
          <img className="exit-logo" src={exitPng} />
        </div>
      </div>
    );
  }
}
