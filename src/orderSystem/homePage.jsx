import React from 'react';

import myStyles from '../styles/homePag.less';
import exitPng from '../../icons/icon_eixt.png';
import stoveBluePng from '../../icons/icon_stove.png';
import coolingPng from '../../icons/icon_cooling.png'
import windpowerPng from '../../icons/icon_windpower.png'
import stoveRedPng from '../../icons/icon_stove_problem.png'
import stoveGrayPng from '../../icons/icon_stove_nouse.png'
import windpowerGrayPng from '../../icons/icon_windpower_nouse.png'
import coolingGrayPng from '../../icons/icon_cooling_nouse.png'
import windpowerRedPng from '../../icons/icon_windpower_problem.png'

export default class HomePage extends React.Component{
    render(){
        return(
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
                    <div className={myStyles.diningTableHaveContent} id={myStyles.diningTable01}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableWithoutContent} id={myStyles.diningTable02}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveBluePng} />
                                    <img src={windpowerPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableWithoutContent} id={myStyles.diningTable03}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveBluePng} />
                                    <img src={windpowerPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableStoveBreakdown} id={myStyles.diningTable04}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                    <img src={stoveRedPng} />
                                    <img src={windpowerPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <ul>
                                    <li>19:00</li>
                                    <li>19:01</li>
                                </ul>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableHaveContent} id={myStyles.diningTable05}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable06}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableHaveContent} id={myStyles.diningTable07}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableWithoutContent} id={myStyles.diningTable08}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveBluePng} />
                                    <img src={windpowerPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableWithoutContent} id={myStyles.diningTable09}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveBluePng} />
                                    <img src={windpowerPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTablewindpowerBreakdown} id={myStyles.diningTable10}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                    <img src={windpowerRedPng} />
                                    <img src={coolingPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <ul>
                                    <li>19:00</li>
                                    <li>19:01</li>
                                </ul>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableHaveContent} id={myStyles.diningTable11}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
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
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable12}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable13}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable14}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable15}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable16}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable17}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable18}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable19}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable20}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable21}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable22}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable23}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myStyles.diningTableNoneUse} id={myStyles.diningTable24}>
                        <div className={myStyles.tableNumber}>餐桌1-001</div>
                        <div className={myStyles.tableContent}>
                            <div className={myStyles.tableContentLeft}>
                                <div className={myStyles.callContent}>
                                    <div className={myStyles.dotGray}></div>
                                    <span className={myStyles.dotSpanGray}>呼叫内容</span>
                                </div>
                                <div className={myStyles.tableImage}>
                                    <img src={stoveGrayPng} />
                                    <img src={windpowerGrayPng} />
                                    <img src={coolingGrayPng} />
                                </div>
                            </div>
                            <div className={myStyles.tableContentRight}>
                                <div className={myStyles.tableHandle}>
                                    处理
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={myStyles.footer}>
                    <div className={myStyles.footerLeft}>
                        <div className={myStyles.footerLeftBox}>
                            <div id={myStyles.dining}></div>
                            <span >正在用餐</span>
                        </div>
                        <div className={myStyles.footerLeftBox}>
                            <div id={myStyles.diningNone}></div>
                            <span >无人用餐</span>
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
        )
    }
}