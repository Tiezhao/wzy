import React from 'react';

import myStyles from '../styles/systemInfo.less';
import exitPng from '../../icons/icon_eixt.png';
import alarmPng from '../../icons/icon_guangbo.png'

export default class SystemInfo extends React.Component{
    render(){
        return(
            <div className={myStyles.SystemInfo}>
                <div className={myStyles.nav}>
                    <div className={myStyles.navBox}>
                        <div className={myStyles.navBoxFloor}>全部</div>
                        <div className={myStyles.navBoxFloor}>未读</div>
                        <div className={myStyles.navBoxFloor}>已读</div>
                    </div>
                    <div className={myStyles.navExit}>
                        <img className={myStyles.exitLogo} src={exitPng} />
                    </div>
                </div>
                <div className={myStyles.content}>
                    <div className={myStyles.contentBox}>
                         <div class={myStyles.contentInfo}>系统消息</div>
                         <div class={myStyles.contentAlarm}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReaded}>标记已读</div>
                    </div>
                    <div className={myStyles.contentBox}>
                        <div class={myStyles.contentInfo}>系统消息</div>
                         <div class={myStyles.contentAlarm}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReaded}>标记已读</div>
                    </div>
                    <div className={myStyles.contentBox}>
                         <div class={myStyles.contentInfoGray}>系统消息</div>
                         <div class={myStyles.contentAlarmGray}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReadedGray}>已读</div>
                    </div>
                    <div className={myStyles.contentBox}>
                        <div class={myStyles.contentInfo}>系统消息</div>
                         <div class={myStyles.contentAlarm}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReaded}>标记已读</div>
                    </div>
                    <div className={myStyles.contentBox}>
                        <div class={myStyles.contentInfo}>系统消息</div>
                         <div class={myStyles.contentAlarm}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReaded}>标记已读</div>
                    </div>
                    <div className={myStyles.contentBox}>
                        <div class={myStyles.contentInfoGray}>系统消息</div>
                         <div class={myStyles.contentAlarmGray}>
                             <h3>尊敬的用户您好！</h3>
                             <h3>您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！</h3>
                         </div>
                         <div className={myStyles.contentSignReadedGray}>已读</div>
                    </div>
                </div>
                <div className={myStyles.footer}>
                    <div className={myStyles.footerAlarm}>
                        <img src={alarmPng} />
                    </div>
                    <div className={myStyles.footerHandle}>
                        <div className={myStyles.handleContent}>您当前还未处理的呼叫套餐有：</div>
                        <div className={myStyles.handleNum}>
                            <span>1号</span>
                            <span>2号</span>
                            <span>15号</span>
                            <span>25号</span>
                            <span>26号</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}