import React from 'react';

import myStyles from '../styles/pressButtonSure.less';
import canclePng from '../../icons/icon_cancle.png';
import successPng from '../../icons/icon_success.png'

export default class ButtonSure extends React.Component{
    render(){
        return(
            <div className={myStyles.pressButtonSure}>
                <div className={myStyles.header}>
                    <div className={myStyles.headerBlue}></div>
                    <div className={myStyles.headerApply}>
                        <h2>申请结果</h2>
                        <img src={canclePng} />
                    </div>
                </div>
                <div className={myStyles.content}>
                    <img src={successPng}/>
                    <h2 className={myStyles.h2First}>申请成功！</h2>
                    <h2>请在三天内完成付费否则系统将无法启动！</h2>
                    <button className={myStyles.contentKown}>我知道了</button>
                </div>
            </div>
        )
    }
}