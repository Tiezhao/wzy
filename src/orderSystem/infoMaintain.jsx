import React from 'react';
import {Table,Radio} from 'antd';

import myStyles from '../styles/infoMaintain.less';
import exitPng from '../../icons/icon_eixt.png';
import alarmPng from '../../icons/icon_guangbo.png'
import tittlebarPng from '../../icons/tittlebar.png';
import subTittlebarPng from '../../icons/sub_tittlebar.png';

export default class InfoMain extends React.Component{
    render(){
        const columns1=[
            {
                title:'呼叫名称',
                dataIndex: 'name',
            },
            {
                title:'操作',
                dataIndex: 'operate',
            }
        ]
        const columns2=[
            {
                title:'区域名称',
                dataIndex: 'name',
            },
            {
                title:'操作',
                dataIndex: 'operate',
            }
        ]
        const dataSource1=[
            {
                key:'1',
                name:'加水',
                operate:<button>编辑</button>
            },
            {
                key:'2',
                name:'点菜',
                operate:<button>删除</button>
            }
        ]
        const dataSource2=[
            {
                key:'1',
                name:'一楼',
                operate:<button>编辑</button>
            },
            {
                key:'2',
                name:'二楼',
                operate:<button>删除</button>
            }
        ]
        const columns3=[
            {
                title:'桌号',
                dataIndex:'tableNum',
            },
            {
                title:'型号',
                dataIndex:'tableIndex',
            },
            {
                title:"所属区域",
                dataIndex:'ownZoom',
            }
        ]
        const dataSource3=[
            {
                key:'1',
                tableNum:"餐桌一",
                tableIndex:"四人桌",
                ownZoom:"一楼"
            },
            {
                key:'2',
                tableNum:"餐桌一",
                tableIndex:"四人桌",
                ownZoom:"一楼"
            },
            {
                key:'3',
                tableNum:"餐桌一",
                tableIndex:"四人桌",
                ownZoom:"一楼"
            }
        ]
        return(
            <div className={myStyles.InfoMain}>
                <div className={myStyles.nav}>
                    <div className={myStyles.navExit}>
                        <img className={myStyles.exitLogo} src={exitPng} />
                    </div>
                </div>
                <div className={myStyles.content}>
                    <div className={myStyles.customMade}>
                        <div className={myStyles.customMadeNav}>呼叫定制</div>
                        <div className={myStyles.customMadeContent}>
                            <h2>您目前已定制2条呼叫操作，您还可以定制4条呼叫操作</h2>
                            <button className={myStyles.newAdd}>新增</button>
                            <div className={myStyles.titleBar}></div>
                            <Table columns={columns1} dataSource={dataSource1} bordered pagination={false} />
                        </div>
                    </div>
                    <div className={myStyles.customMade}>
                        <div className={myStyles.customMadeNav}>区域定制</div>
                        <div className={myStyles.customMadeContent}>
                            <button className={myStyles.newAddDiffer}>新增</button>
                            <div className={myStyles.titleBar}></div>
                            <Table columns={columns2} dataSource={dataSource2} bordered pagination={false} />
                        </div>
                    </div>
                    <div className={myStyles.customEdit}>
                        <div className={myStyles.customEditNav}>区域编辑</div>
                        <div className={myStyles.customEditContent}>
                            <div className={myStyles.customEditContentBox}>
                                <div className={myStyles.tableArea}>
                                    <img src={tittlebarPng}/>
                                    <h2>区域餐桌</h2>
                                </div>
                                <div className={myStyles.ownArea}>
                                    <h2>所属区域</h2>
                                    <select name="未分配">
                                        <option value="未分配" selected="selected">未分配</option>
                                        <option value="一楼">一楼</option>
                                        <option value="二楼">二楼</option>
                                    </select>
                                    <button className={myStyles.areaDeleteButton}>删除</button>
                                    <Radio.Group>
                                        <Radio value="checkbox"></Radio>
                                    </Radio.Group>
                                    <Table columns={columns3} dataSource={dataSource3} bordered />
                                </div>
                            </div>
                            <div className={myStyles.customOverViewBox}>
                                <div className={myStyles.tableAll}>
                                    <img src={subTittlebarPng}/>
                                    <h2>区域餐桌</h2>
                                </div>
                                <div className={myStyles.tableProps}>
                                    <h2>餐桌属性</h2>
                                    <select>
                                        <option value="全部">全部</option>
                                        <option value="未分配" selected="selected">未分配</option>
                                        <option value="一楼">一楼</option>
                                        <option value="二楼">二楼</option>
                                    </select>
                                    <button className={myStyles.areaAllocateButton}>分配</button>
                                    <Radio.Group>
                                        <Radio value="checkbox"></Radio>
                                    </Radio.Group>
                                    <Table columns={columns3} dataSource={dataSource3} bordered />
                                </div>
                            </div>
                        </div>
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