import React from 'react';
import {Image} from 'antd';


import InfoMain from './infoMaintain.jsx';
import StoveMatch from './stoveMatch.jsx';
import SystemInfo from './systemInfo.jsx';
import UrgencyStart from './urgencyStart.jsx';
import HomePage from './homePage.jsx';
import ButtonSure from './pressButtonSure.jsx';
import myStyles from '../styles/App.less';

import systemPng from '../../icons/无烟灶管理.png'
import homePagePng from '../../icons/icon_home.png'
import stoveMatchPng from '../../icons/icon_stovematch.png'
import  informPng  from '../../icons/icon_inform.png'
import emergePng from '../../icons/icon_emerge.png'
import maintenancePng from '../../icons/icon_maintenance.png'
import QRCodePng from '../../icons/二维码.png'

export default class App extends React.Component{

    handleHomePageBox=()=>{
        {
            // backgroundColor:#3bb8f8s
        }
    }

    render(){
        return(
            <div>
                <div className={myStyles.app}>
                    <Image className={myStyles.systemLogo} src={systemPng} />
                    <ul className={myStyles.nav}>
                        <li className={myStyles.sameLi}>
                            <div className={myStyles.homePageBox} onClick={this.handleHomePageBox}>
                                <Image className={myStyles.homePageLogo} src={homePagePng} />
                                <div className={myStyles.homePage}>
                                    <span className={myStyles.zhu}>主</span>
                                    <span className={myStyles.ye}>页</span>
                                </div>
                            </div>
                        </li>
                        <li className={myStyles.sameLi}>
                            <div className={myStyles.stoveMatcBox}>
                                <Image className={myStyles.stoveMatchLogo} src={stoveMatchPng}  />
                                <div className={myStyles.stoveMatch}> 
                                    <span>灶台匹配</span>
                                </div>
                            </div>
                        </li>
                        <li className={myStyles.sameLi}>
                            <div className={myStyles.SystemInfoBox}>
                                <div className={myStyles.SystemInfoPng}>
                                    <Image className={myStyles.SystemInfoLogo} src={informPng}  />
                                    <div className={myStyles.SystemInfoNum}>
                                        <div className={myStyles.SystemInfoSpan}>
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={myStyles.SystemInfo}> 
                                    <span>系统通知</span>
                                </div>
                            </div>
                        </li>
                        <li className={myStyles.sameLi}>
                            <div className={myStyles.urgencyStartBox}>
                                <Image className={myStyles.urgencyStartLogo} src={emergePng}  />
                                <div className={myStyles.urgencyStart}> 
                                    <span>紧急启用</span>
                                </div>
                            </div>
                        </li>
                        <li className={myStyles.sameLi}>
                            <div className={myStyles.infoMaintainBox}>
                                <Image className={myStyles.infoMaintainLogo} src={maintenancePng}  />
                                <div className={myStyles.infoMaintain}> 
                                    <span>信息维护</span>
                                </div>
                            </div>
                        </li>
                        <li className={myStyles.QRLi}>
                            <div>
                                <img className={myStyles.QRCodeLogo} src={QRCodePng} />
                                <div className={myStyles.telephone}>
                                    <span>热线：023-1234 5678</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={myStyles.content}>
                    <HomePage />
                    {/* <StoveMatch /> */}
                    {/* <SystemInfo /> */}
                    {/* <UrgencyStart /> */}
                    {/* <InfoMain /> */}
                    {/* <ButtonSure /> */}
                </div>
            </div>
        )
    }
}