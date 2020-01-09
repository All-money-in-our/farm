import React, { Component, Fragment } from 'react'
import { Table, Pagination, Spin, Button, Popconfirm, message,Modal,Form } from 'antd';
import { getSells, delSells,addSells } from '../../api/sell'
import styles from './sell.module.less'



const pageSize = 4
class Sell extends Component {
    // 请求第一页数据
    componentDidMount() {
        this.getTableData(1)
        // 请求第一页数据
    }

    // 根据页数获取网络数据
    getTableData(nowPage=1) {
        this.setState({ spinning: true })
        // 请求之前出现 加载中
        getSells(nowPage, pageSize)
            .then((res) => {
                // console.log('调用数据成功', res)
                this.setState({
                    dataSource: res.list.sells,
                    allCount: res.list.allCount,
                    spinning: false
                    // 数据请求成功之后加载中隐藏
                })
            })
            .catch((err) => {
                console.log('接口出现错误', err)
            })
    }

    // 删除表中数据的方式
    delTableData(id) {
        // 发起网络请求 更新页面数据
        delSells(id)
            .then((res) => {
                // console.log('删除成功')
                message.success('删除成功', 1)
                // 删除成功后重新刷新页面
                this.getTableData()
            })
    }

    constructor() {
        super()
        this.state = {
            spinning: false, // 默认加载中不显示
            nowPage: 1, // 当前页数
            allCount: 0, // 默认总页数
            visible: false, // 默认模态框不显示
            dataSource: []
        }
        this.columns = [
            {
                title: '销售类型',
                dataIndex: 'types',
                key: 'types',
                // render: text => <a>{text}</a>,
            },
            {
                title: '销售作物',
                dataIndex: 'product',
                key: 'product',
            },
            {
                title: '销售时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '销售产量',
                dataIndex: 'kg',
                key: 'kg',
            },
            {
                title: '销售价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '',
                dataIndex: '_id',
                key: 'id',
                width: 180,
                render:(_id)=> {
                    // 渲染出dom元素
                    return (
                        <Fragment>
                            <Button 
                            type="primary" size="small"
                            onClick={
                                ()=>{
                                    // console.log('点击按钮时添加数据',this)
                                    // 点击按钮让模态框出现
                                    this.setState({visible: true})
                                }
                            }
                            >增加</Button>
                            <Button type="info" size="small">修改</Button>
                            <Popconfirm
                                title="你确定要删除此项吗"
                                onConfirm={() => {
                                    // 点击确认时 的回调
                                    this.delTableData(_id)
                                }}
                                okText='删除'
                                cancelText='取消'
                            >
                                <Button type="danger" size="small">删除</Button>
                            </Popconfirm>
                        </Fragment>
                    )
                },
            }
        ]
    }

    // 用于和表单进行双向绑定，详见下方描述
    dataBind=()=>{
        let { getFieldsValue } = this.props.form
        let {num,types,product,time,kg,price} = getFieldsValue()
        addSells(num,types,product,time,kg,price)
        .then((res)=>{
            console.log('调用接口成功',res)
        })
        .catch((err)=>{
            console.log('调用接口失败',err)
        })
    }

    render() {
        // console.log(this,'表单')
        let { dataSource, allCount, spinning,visible } = this.state
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='APP'>
                <Spin spinning={spinning}>
                    <Table columns={this.columns} dataSource={dataSource} rowKey='_id' pagination={false}>
                    </Table>
                </Spin>
                <Pagination
                    total={allCount}
                    pageSize={pageSize}
                    className={styles.pagination}
                    onChange={(page) => {
                        // console.log('目标页数', page)
                        this.getTableData(page)
                    }}
                ></Pagination>
                <Modal
                    title="添加数据"
                    visible={visible}
                    onOk={()=>{
                        // console.log('添加数据成功')
                        this.dataBind()
                        this.setState({visible: false})
                        this.getTableData()
                    }}
                    okText='确定'
                    cancelText='取消'
                    onCancel={
                        ()=>{
                            // console.log('点击按钮时取消模态框')
                            this.setState({visible: false})
                        }
                    }
                >
                    <div>
                        <Form.Item>
                            销售序号:
                            {
                                getFieldDecorator('num',{
                                    rules: [{ required: true, message: 'Please input your num!' }]
                                })(
                                <input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                        <Form.Item>
                            销售类型:
                            {
                                getFieldDecorator('types',{
                                    rules: [{ required: true, message: 'Please input your types!' }]
                                })(<input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                        <Form.Item>
                            销售作物:
                            {
                                getFieldDecorator('product',{
                                    rules: [{ required: true, message: 'Please input your product!' }]
                                })(<input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                        <Form.Item>
                            销售时间:
                            {
                                getFieldDecorator('time',{
                                    rules: [{ required: true, message: 'Please input your time!' }]
                                })(<input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                        <Form.Item>
                            销售产量:
                            {
                                getFieldDecorator('kg',{
                                    rules: [{ required: true, message: 'Please input your kg!' }]
                                })(<input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                        <Form.Item>
                            销售价格:
                            {
                                getFieldDecorator('price',{
                                    rules: [{ required: true, message: 'Please input your price!' }]
                                })(<input type="text" className={styles.text}></input>)
                            }
                        </Form.Item>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Form.create()(Sell);

