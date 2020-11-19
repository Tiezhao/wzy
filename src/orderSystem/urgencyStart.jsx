import React from 'react';
// import {Form,Button,Input} from 'antd';

import myStyles from '../styles/urgencyStart.less'
import TitlebarPng from '../../icons/tittlebar.png'
import exitPng from '../../icons/icon_eixt.png';
import alarmPng from '../../icons/icon_guangbo.png'


export default class UrgencyStart extends React.Component{
    render(){
        return(
            <div className={myStyles.urgencyStart}>
                <div className={myStyles.nav}>
                    <div className={myStyles.navExit}>
                        <img className={myStyles.exitLogo} src={exitPng} />
                    </div>
                </div>
                <div className={myStyles.content}>
                    <div className={myStyles.authorization}>
                        <div className={myStyles.authorVerify}>
                            <img src={TitlebarPng} />
                            <span>授权验证</span>
                        </div>
                        <div className={myStyles.accoutAutor}>
                            <h2>账号授权码：</h2>
                            <input type="text" placeholder="授权码" />
                        </div>
                    </div>
                    <div className={myStyles.apply}>
                        <div className={myStyles.applyFor}>
                            <img src={TitlebarPng} />
                            <span>紧急启动三天申请</span>
                        </div>
                        <div className={myStyles.applyContent}>
                            <div className={myStyles.applyContentBox}>
                                <h2>申请人：</h2>
                                <input type="text" placeholder="申请人姓名"/> 
                            </div>
                            <div className={myStyles.applyContentBox}>
                                <h2>手机号：</h2>
                                <input type="text" placeholder="手机号"/>
                            </div>
                            <div className={myStyles.applyContentBox}>
                                <h2>验证码：</h2>
                                <input type="text" placeholder="验证码"/>
                                <button type="submit">获取验证码</button>
                            </div>
                            
                            
                        </div>
                    </div>
                    <button className={myStyles.buttonSure} type="submit">确定</button>
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