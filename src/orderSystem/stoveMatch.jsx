import React from 'react';
import {Table}  from 'antd';

import myStyles from '../styles/stoveMatch.less';
import exitPng from '../../icons/icon_eixt.png';
import alarmPng from '../../icons/icon_guangbo.png'

export default class StoveMatch extends React.Component{
    render(){

        const dataSource=[
            {
                key:'1',
                index:'1',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            },
            {
                key:'2',
                index:'2',
                stoveNum:'2002',
                bluePing:'AB:CE:24',
                terminalIndex:'P002',
                terminalName:'餐桌二',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'002'
            },
            {
                key:'3',
                index:'3',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            },
            {
                key:'4',
                index:'4',
                stoveNum:'2002',
                bluePing:'AB:CE:24',
                terminalIndex:'P002',
                terminalName:'餐桌二',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'002'
            },
            {
                key:'5',
                index:'5',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            },
            {
                key:'6',
                index:'6',
                stoveNum:'2002',
                bluePing:'AB:CE:24',
                terminalIndex:'P002',
                terminalName:'餐桌二',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'002'
            },
            {
                key:'7',
                index:'7',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            },
            {
                key:'8',
                index:'8',
                stoveNum:'2002',
                bluePing:'AB:CE:24',
                terminalIndex:'P002',
                terminalName:'餐桌二',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'002'
            },
            {
                key:'9',
                index:'9',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            },
            {
                key:'10',
                index:'10',
                stoveNum:'2002',
                bluePing:'AB:CE:24',
                terminalIndex:'P002',
                terminalName:'餐桌二',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'002'
            },
            {
                key:'11',
                index:'11',
                stoveNum:'2001',
                bluePing:'AB:CE:23',
                terminalIndex:'P001',
                terminalName:'餐桌一',
                StartTime:'2017/01/01',
                outdateTime:'2018/12/12',
                surplusTime:'300',
                state:'正常',
                orderNum:'001'
            }
        ]

        const columns=[
            {
                title:'序号',
                dataIndex:'index',
                key:'index'
            },
            {
                title:'灶台编号',
                dataIndex:'stoveNum',
                key:'stoveNum'
            },
            {
                title:'蓝牙ping码',
                dataIndex:'bluePing',
                key:'bluePing'
            },
            {
                title:'终端编号',
                dataIndex:'terminalIndex',
                key:'terminalIndex'
            },
            {
                title:'终端名称',
                dataIndex:'terminalName',
                key:'terminalName'
            },
            {
                title:'启用时间',
                dataIndex:'StartTime',
                key:'StartTime'
            },
            {
                title:'到期时间',
                dataIndex:'outdateTime',
                key:'outdateTime'
            },
            {
                title:'剩余时间/天',
                dataIndex:'surplusTime',
                key:'surplusTime'
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state'
            },
            {
                title:'订单号',
                dataIndex:'orderNum',
                key:'orderNum'
            }
        ]

        return(
            <div className={myStyles.stoveMatch}>
                <div className={myStyles.nav}>
                    <div className={myStyles.navContent}>
                        <div className={myStyles.navContentBox}>总租用台数:</div>
                        <div className={myStyles.navContentBox}>50</div>
                        <div className={myStyles.navContentBox}>台</div>
                    </div>
                    <div className={myStyles.navLogo}>
                        <img className={myStyles.exitLogo} src={exitPng} />
                    </div>
                </div>
                <div className={myStyles.content}>
                    <Table dataSource={dataSource} columns={columns} bordered={true} pagination={false}
                    //  pagination={{ defaultCurrent:1 }, {total:12}}
                    />
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