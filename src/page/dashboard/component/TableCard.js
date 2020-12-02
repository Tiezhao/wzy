import { Button, message } from 'antd';
import './TableCard.less';
import dayjs from 'dayjs';
import http from '../../../utils/http';
import { connect } from 'dva';

import { addID4ArrItem } from '../../../utils/addID4ArrItem.js';

const arr = [{}, {}, {}];
// arr.length 3
// arr.log = []
arr.forEach(addID4ArrItem);

// 0: close, 1: on, 2: error
const icons = {
  stove: {
    0: require('../../../../static/image/icon_stove_nouse.png'),
    1: require('../../../../static/image/icon_stove.png'),
    2: require('../../../../static/image/icon_stove_problem.png'),
  },

  fan: {
    0: require('../../../../static/image/icon_windpower_nouse.png'),
    1: require('../../../../static/image/icon_windpower.png'),
    2: require('../../../../static/image/icon_windpower_problem.png'),
  },
  cooler: {
    0: require('../../../../static/image/icon_cooling_nouse.png'),
    1: require('../../../../static/image/icon_cooling.png'),
    2: require('../../../../static/image/icon_cooling_problem.png'),
  },
};

// 0: off, 1: on, 2: error，默认为0 off
const tableColor = {
  0: '#cecece',
  1: '#3fb8f8',
  2: '#ef4748',
};
// console.log(tableColor[1]);
//通过状态获取颜色
const getColorByStatus = (status) => tableColor[status] || tableColor[0];

const FlexVerticalCenter = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
);

const mapStateToProps = (state) => ({ ...state.dashboard });

@connect(mapStateToProps)
export default class TableCard extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const {
      requestList,
      tableName,
      tableStatus,
      stoveStatus,
    } = this.props.data;

    console.log('kkkk', this.props);

    const handleRequest = (e) => {
      // 获取参数
      // 请求，结束后更新状态
      const { tableID, floorID } = this.props.data;
      const params = { tableID, floorID };

      this.setState({ loading: true });
      http.post('/api/v1/dashboard/handleRequest', params).then((result) => {
        this.setState({ loading: false });

        if (result.success) {
          message.success('请求已处理');
          this.props.tableList.all.tableList.forEach((table) => {
            if (table.tableID === tableID) {
              table.requestList = [];
            }
          });
          this.props.dispatch({
            type: 'dashboard/updateTableList',
            payload: { ...this.props.tableList },
          });
        } else {
          message.error(result.message);
        }
      });
    };

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
              {requestList.map(({ reqID, reqContent, reqTime }) => (
                <div
                  key={reqID}
                  className="t-call-item"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{reqContent}</span>
                  <span>{reqTime ? dayjs(reqTime).format('HH:mm') : null}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="t-status">
            <div className="t-status-list">
              <img
                className="t-status-icon"
                src={icons.stove[stoveStatus.power]}
              />
              <img className="t-status-icon" src={icons.fan[stoveStatus.fan]} />
              <img
                className="t-status-icon"
                src={icons.cooler[stoveStatus.water]}
              />
            </div>
            <Button
              loading={this.state.loading}
              type="primary"
              disabled={!requestList.length}
              onClick={handleRequest}
            >
              处理
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
