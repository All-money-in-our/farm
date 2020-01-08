import React, { Component } from 'react';
import { Table, Form, Input, Icon, Button,Drawer, Pagination,Alert,Modal } from 'antd'
import * as styles from './Inquire.module.less'
import { getInquireList,getStateList,delInquireList } from '../../../api/Inquire'
import Add from './Add'
const pageSize = 3
export class Inquire extends Component {
    constructor() {
        super()
        this.state = {
            sum:0,//总库存
            selectLength:0,//已选长度
            isFullScreen: false,//是否全屏
            data: [],//获取到的数据
            nowPage: 1,//当前页数
            Stainquire:'',//状态查询
            visible:false,//抽屉的显示隐藏
            allLit:0,
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '描述',
                    dataIndex: 'desc',
                    key: 'desc',
                },
                {
                    title: '状态',
                    dataIndex: 'sta',
                    key: 'sta',
                },
                {
                    title: '库存',
                    dataIndex: 'inventory',
                    key: 'inventory',
                },
                {
                    title: '操作',
                    dataIndex: '_id',
                    key: '_id',
                    render:(_id)=>{
                        return(
                            <div>
                                <Button icon="setting" type="primary" ghost>配置</Button>
                                <Button type="danger" ghost onClick={()=>{
                                    delInquireList(_id)
                                    .then((res)=>{})
                                    this.getTableData()
                                }}>删除</Button>
                            </div>
                            
                        )
                    }
                },
            ],
            rowSelection:{
                onChange: (selectedRowKeys, selectedRows) => {
                    this.setState({selectLength:selectedRows.length})
                    let sumrow=0
                    for(let i=0;i<selectedRows.length;i++){
                        
                        sumrow+=Number(selectedRows[i].inventory)
                    }
                    this.setState({sum:sumrow})
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                },
                getCheckboxProps: record => ({
                    disabled: record.name === 'Disabled User', // Column configuration not to be checked
                    name: record.name,
                }),
            }
        }
    }
    componentDidMount() {
        this.getTableData()
    }
    // 获取数据
    getTableData(nowPage = 1) {
        getInquireList(nowPage, pageSize)
            .then((res) => {
                this.setState({ data: res.list.inquire,addList:res.list.allCount})
            })
    }
    fullScreen = () => {
        console.log('fullscreen:', this.state.isFullScreen);
        if (!this.state.isFullScreen) {
            this.requestFullScreen();
        } else {
            this.exitFullscreen();
        }
    };

    //进入全屏
    requestFullScreen = () => {
        console.log('requestFullScreen')
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    };

    //退出全屏
    exitFullscreen = () => {
        console.log('exitFullscreen')
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    };

    //监听fullscreenchange事件
    watchFullScreen = () => {
        const _self = this;
        document.addEventListener(
            "webkitfullscreenchange",
            function () {
                _self.setState({
                    isFullScreen: document.webkitIsFullScreen
                });
            },
            false
        );
    };
    // 添加数据
    addList = () =>{
        this.setState({visible:true})
    }
    render() {
        let { columns, data,Stainquire ,nowPage,visible,addList,rowSelection,selectLength,sum} = this.state
        return (
            <div>
                <Form layout="inline">
                    <Form.Item>
                        <Input placeholder="状态查询..." style={{ width: 270 }} 
                        value={Stainquire} onChange={(e)=>{
                            this.setState({Stainquire:e.target.value})
                        }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={()=>{
                            getStateList(Stainquire,nowPage, pageSize)
                            .then((res)=>{this.setState({data:res.list.inquires})})
                        }}>
                            查询
                         </Button>
                        <Button type='dashed' onClick={()=>{
                            this.getTableData()
                        }}>
                            重置
                         </Button>
                    </Form.Item>
                </Form>
                <Alert message={'已选:'+selectLength+'项,总库存:'+sum+'件'} type="info" />
                <div className={styles.btn}>
                    <Button className={styles.btnRight} type='primary' icon="folder-add"
                    onClick={this.addList}
                    >新建</Button>
                    <Icon className={styles.right1} type="fullscreen" onClick={this.fullScreen} />
                    <Icon className={styles.right2} type="undo" onClick={()=>{
                        this.getTableData()
                    }} />
                </div>
                <Table columns={columns}
                    dataSource={data}
                    rowSelection={rowSelection}
                    rowKey='_id'
                    pagination={false}
                >
                
                </Table>
                <Pagination  simple defaultCurrent={nowPage} total={addList} pageSize={pageSize}
                onChange={(page)=>{
                    this.getTableData(page)
                }}
                ></Pagination>
                <Drawer visible={visible} 
                closable={false}
                onClose={()=>{
                    this.setState({visible:false})
                }}>
                    <Add upshow={()=>{
                        this.setState({visible:false})
                        this.getTableData()
                    }}></Add>
                </Drawer>
                <Modal visible={false}>
                </Modal>
            </div>
        );
    }
}

export default Inquire;
