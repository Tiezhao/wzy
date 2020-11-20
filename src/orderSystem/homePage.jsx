import React from 'react';

import myStyles from '../styles/homePag.less';
import exitPng from '../../icons/icon_eixt.png';
import stoveBluePng from '../../icons/icon_stove.png';
import coolingPng from '../../icons/icon_cooling.png';
import windpowerPng from '../../icons/icon_windpower.png';
import stoveRedPng from '../../icons/icon_stove_problem.png';
import stoveGrayPng from '../../icons/icon_stove_nouse.png';
import windpowerGrayPng from '../../icons/icon_windpower_nouse.png';
import coolingGrayPng from '../../icons/icon_cooling_nouse.png';
import windpowerRedPng from '../../icons/icon_windpower_problem.png';

const TableCard = ({ data }) => {
  return (
    <div
      className={myStyles.diningTableHaveContent}
      id={myStyles.diningTable01}
    >
      <div className={myStyles.tableNumber}>{data.name}</div>
      <div className={myStyles.tableContent}>
        <div className={myStyles.tableContentLeft}>
          <div className={myStyles.callContent}>
            <div className={myStyles.dotBlue}></div>
            <span className={myStyles.dotSpanBlue}>呼叫内容</span>
          </div>
          <ul>
            <li>加水</li>
            <li>点菜</li>
          </ul>
          <div className={myStyles.tableImage}>
            <img src={stoveBluePng} />
            <img src={windpowerPng} />
            <img src={coolingPng} />
          </div>
        </div>
        <div className={myStyles.tableContentRight}>
          <ul>
            <li>19:00</li>
            <li>19:01</li>
          </ul>
          <div className={myStyles.tableHandle}>处理</div>
        </div>
      </div>
    </div>
  );
};

export default class HomePage extends React.Component {
  render() {
    const tempArr = new Array(24);
    tempArr.fill(0);
    const data = tempArr.map((value, index, array) => {
      return { name: `餐桌${index}` };
    });

    return (
      <div className={myStyles.homePage}>
        <div className={myStyles.nav}>
          <div className={myStyles.navBox}>
            <div className={myStyles.navBoxFloor}>全部</div>
            <div className={myStyles.navBoxFloor}>一楼</div>
            <div className={myStyles.navBoxFloor}>二楼</div>
            <div className={myStyles.navBoxFloor}>三楼</div>
          </div>
          <div className={myStyles.navExit}>
            <img className={myStyles.exitLogo} src={exitPng} />
          </div>
        </div>
        <div className={myStyles.content}>
          {data.map((v) => (
            <TableCard data={v} />
          ))}
        </div>
        <div className={myStyles.footer}>
          <div className={myStyles.footerLeft}>
            <div className={myStyles.footerLeftBox}>
              <div id={myStyles.dining}></div>
              <span>正在用餐</span>
            </div>
            <div className={myStyles.footerLeftBox}>
              <div id={myStyles.diningNone}></div>
              <span>无人用餐</span>
            </div>
            <div className={myStyles.footerLeftBox}>
              <div id={myStyles.tableBreakdown}></div>
              <span>餐桌故障</span>
            </div>
          </div>
          <div className={myStyles.footerRight}>
            <div className={myStyles.footerRightBox}>
              <span>已用：</span>
              <span className={myStyles.spanBlue}>40</span>
              <span>台</span>
            </div>
            <div className={myStyles.footerRightBox}>
              <span>剩余：</span>
              <span className={myStyles.spanBlue}>18</span>
              <span>台</span>
            </div>
            <div className={myStyles.footerRightBox}>
              <span>故障：</span>
              <span className={myStyles.spanRed}>2</span>
              <span>台</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
