import React from 'react';
import { Button, message } from 'antd';
import http from '../../../utils/http';

import './infoCard.less';

//0为已读，1为未读，默认为1未读
const infoCardColor = {
  0: '#cecece',
  1: '#3fb8f8',
};

//再尝试自定义组件
export default class InfoCard extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { markRead } = this.props;
    const { ID, content, isRead } = this.props.data;

    return (
      <div className="infocard">
        <div className="infocard-box">
          <div
            className="infocard-nav"
            style={{ backgroundColor: isRead ? '#cecece' : '#3fb8f8' }}
          >
            系统消息
          </div>
          <div className="infocard-content">
            <h3>{content[0]}</h3>
            <h3>{content[1]}</h3>
          </div>
          <Button
            loading={this.state.loading}
            className="infocard-button"
            type="primary"
            disabled={isRead}
            onClick={() => {
              this.setState({ loading: true });
              http.post('/api/v1/notice/markRead', { ID }).then((result) => {
                this.setState({ loading: false });
                if (result.success) {
                  markRead(ID);
                } else {
                  message.error(result.message);
                }
              });
            }}
          >
            标记已读
          </Button>
        </div>
      </div>
    );
  }
}
